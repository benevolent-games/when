
import {Mode} from "./app/state/mode.js"
import {WhenApp} from "./app/components/when-app.js"
import {registerElements} from "@chasemoskal/magical"
import {determine_initial_state} from "./app/widgets/determine_initial_state.js"

const state = determine_initial_state(window.location.href)

if (state.mode === Mode.ViewingTheTime && state.label)
	document.title = `when: ${state.label}`

registerElements({WhenApp})

const when_app: WhenApp = document.querySelector("when-app")!
when_app.state = state

