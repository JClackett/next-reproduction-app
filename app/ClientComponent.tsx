"use client";
import * as React from "react"

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
		</div>
	)
}