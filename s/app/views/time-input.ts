
import {html} from "lit"
import {view} from "@chasemoskal/magical"
import {generate_viewing_link} from "../widgets/generate_viewing_link.js"

export const TimeInputView = view({shadow: false}, use => () => {
	const [time, set_time] = use.state<undefined | number>(undefined)
	const [label, set_label] = use.state<string>("")

	function update_draft_time(e: InputEvent) {
		const target = e.target as HTMLInputElement
		set_time(+new Date(target.value))
	}

	function update_draft_label(e: InputEvent) {
		const target = e.target as HTMLInputElement
		set_label(target.value ?? "")
	}

	const is_valid = (time !== undefined && label !== undefined)

	return html`
		<label>
			<span>choose date and time</span>
			<input
				class=time_input
				type="datetime-local"
				@change=${update_draft_time}
				@input=${update_draft_time}
				/>
		</label>

		<label>
			<span>choose a label</span>
			<input
				class=label_input
				type="text"
				@change=${update_draft_label}
				@input=${update_draft_label}
				/>
		</label>

		${is_valid
			? generate_viewing_link(time, label)
			: undefined}
	`
})

