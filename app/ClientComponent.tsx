"use client";
import * as React from "react"
import { testAction } from "./action";
import Link from "next/link";

interface Props {
	name: string
}

export function ClientComponent (props: Props) {
	return (
		<div>
			<p>
				This is a client component
			</p>
			<p>{props.name}</p>

			<button onClick={async ()=>{
					const result = await testAction()
					alert(result)
			}}>Fire action</button>

			<Link
			style={{padding: 10}}
			prefetch={false}
				href="/generate?title=Hello&description=World"
			>Generate txt</Link>
		</div>
	)
}