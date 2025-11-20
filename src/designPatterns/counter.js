import { save } from "./storage.js"
import { state } from "./store.js"

const display = document.querySelector('#counter-value')

function updateCounter() {
	display.textContent = String(state.counter)
}

function initCounter() {
	const plus = document.querySelector('#plus-button')
	const minus = document.querySelector('#minus-button')

	updateCounter()

	plus.addEventListener('click', () => {
		state.counter++
		updateCounter()
		save()
	})
	minus.addEventListener('click', () => {
		state.counter--
		updateCounter()
		save()
	})
}

export { initCounter }
