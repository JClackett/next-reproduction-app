import * as React from "react"
import { ClientComponent } from "./ClientComponent";
import Link from "next/link";

export default function Home() {
  return <div>
    <h1>Server Component</h1>
    <Link href="/test">Go to another test page</Link>

    <React.Suspense fallback={<div>Loading...</div>}>
      <SuspendedComponent />
    </React.Suspense>
  </div>
}



const getData = async () => {
  // fake db call to prisma
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { foo: 'Bar' };
}

async function SuspendedComponent() {  
  const data = await getData();
  return <div>
    <ClientComponent name={data.foo} />
  </div>
}