
import page from "./page.partial.html.js"
import {template, html} from "@benev/turtle"

const {url} = import.meta

export default template(async b => page(b, {
	head: html`
		<script type=module defer src="/node_modules/es-module-shims/dist/es-module-shims.wasm.js"></script>
		<script type=importmap-shim defer src="${b.path(url).version.local('importmap.json')}"></script>
		<script type=module-shim defer src="${b.path(url).version.local('main.js')}"></script>
	`,
	body: html`
		<h1><a href="/">when</a></h1>
		<when-app></when-app>
	`,
}))

