
export class TimeWizard {
	#date: Date

	constructor(time: number) {
		this.#date = new Date(time)
	}

	get user_time_zone() {
		return Intl.DateTimeFormat().resolvedOptions().timeZone
	}

	get datecode() {
		const date = this.#date
		const year = date.getFullYear()
		const month = (date.getMonth() + 1).toString().padStart(2, "0")
		const day = date.getDate().toString().padStart(2, "0")
		return `${year}-${month}-${day}`
	}

	get clock24() {
		const date = this.#date
		return date.toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit", hourCycle: "h24"})
	}

	get calendar() {
		const date = this.#date
		return date.toLocaleDateString(undefined, {year: undefined, month: "long", day: "numeric"})
	}

	get dayname() {
		const date = this.#date
		return date.toLocaleDateString(undefined, {weekday: "long"})
	}

	get clock() {
		const date = this.#date
		return date.toLocaleTimeString(undefined, {hour: "numeric", hour12: true, minute: "2-digit"})
	}
}

