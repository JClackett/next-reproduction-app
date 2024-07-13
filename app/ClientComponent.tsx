"use client";
import * as React from "react"
import { testAction } from "./action";

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
		</div>
	)
}