// routes/about.tsx

/** @jsx h */
import { h } from "preact"
import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
	async GET(req, ctx) {
		const resp = await ctx.render()
		resp.headers.set("X-Custom-Header", "Hello")
		return resp
	}
}

const AboutPage = () => {
	return (
		<main>
		  <h1>About</h1>
		  <p>This is an about page.</p>
		</main>
	)
}

export default AboutPage
