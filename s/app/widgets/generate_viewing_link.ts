
import {html} from "lit"

export function generate_viewing_link(time: number, label: string) {
	const params = new URLSearchParams()
	params.set("t", JSON.stringify(time))
	params.set("l", JSON.stringify(label))

	const url = "?" + params.toString()

	return html`
		<a class=viewlink target=_blank href="${url}">
			viewing link
		</a>
	`
}

