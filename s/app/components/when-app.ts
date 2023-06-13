
import {LitElement} from "lit"
import {property} from "lit/decorators.js"
import {mixinLightDom} from "@chasemoskal/magical"

import {Mode} from "../state/mode.js"
import {TimeWizard} from "../widgets/time_wizard.js"
import {TimeInputView} from "../views/time-input.js"
import {ViewingState} from "../state/viewing_state.js"
import {ChoosingState} from "../state/choosing_state.js"
import {TimeDisplayView} from "../views/time-display.js"

@mixinLightDom()
export class WhenApp extends LitElement {

	@property()
	state: undefined | ViewingState | ChoosingState

	render() {
		const {state} = this

		return (state && (state.mode === Mode.ViewingTheTime))
			? TimeDisplayView(new TimeWizard(state.time), state.label)
			: TimeInputView()
	}
}

