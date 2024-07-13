import { type NextRequest, NextResponse } from "next/server"


export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const result = 
      {title: searchParams.get("title"),
      description: searchParams.get("description"),
    }

    const buffer = `${result.title} ${result.description}`
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${result.title}.txt"`,
      },
    })
  } catch (e) {
    console.log(e)
    return new Response("Error generating pdf", { status: 500 })
  }
}
