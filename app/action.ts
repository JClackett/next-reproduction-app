"use server"

export async function testAction() {
	console.log("test action")
	await new Promise(resolve => setTimeout(resolve, 2000));
	return "Action success"
}