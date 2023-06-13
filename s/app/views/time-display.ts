
import {html} from "lit"
import {view} from "@chasemoskal/magical"
import {TimeWizard} from "../widgets/time_wizard.js"

export const TimeDisplayView = view(
	{shadow: false},
	() => (t: TimeWizard, label: string) => html`

		<p class=label>${label}</p>

		<p class=clock>
			${t.clock}
		</p>

		<p class=daydate>
			<span class=dayname>${t.dayname}</span>
			<span class=calendar>${t.calendar}</span>
		</p>

		<p class=advancedtime>
			<span class=datecode>${t.datecode}</span>
			<span class=clock24>${t.clock24}</span>
			<span class=user_time_zone>${t.user_time_zone}</span>
		</p>
	`
)

