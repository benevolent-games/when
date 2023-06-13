
import {Mode} from "../state/mode.js"
import {ViewingState} from "../state/viewing_state.js"
import {ChoosingState} from "../state/choosing_state.js"

export function determine_initial_state(url: string): ViewingState | ChoosingState {
	const {searchParams} = new URL(url)

	if (searchParams.has("t")) {
		const time = JSON.parse(searchParams.get("t")!)
		const label = JSON.parse(searchParams.get("l") ?? '""')

		return {
			mode: Mode.ViewingTheTime,
			time,
			label,
		}
	}
	else {
		return {
			mode: Mode.ChoosingTheTime,
		}
	}
}

