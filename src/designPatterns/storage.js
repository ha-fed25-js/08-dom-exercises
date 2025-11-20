/*
Spara data med localStorage, så kan den hämtas när man laddar om sidan.
Vi vill spara:
- värdet på counter (flik 3)
- vilken flik som är senast klickad
*/

import { state } from "./store.js";

const key = 'DOM övningar'

function save() {
	let data = {
		counter: state.counter,
		selectedTab: state.selectedTab
	}
	// om man skickar in ett objekt direkt sparas '[object Object]'
	// använd JSON för att strängifiera objekte
	let dataAsString = JSON.stringify(data)
	localStorage.setItem(key, dataAsString)
}

// Returnerar värden på counter och selectedTab
function load() {
	let dataAsString = localStorage.getItem(key)
	// Obs! Det kanske inte finns ett värde på den platsen i localStorage - i så fall får vi NULL
	const defaults = { counter: 0, selectedTab: 0 }
	let data

	if( dataAsString ) {
		// datan fanns! hurra!
		// Men det är inte säkert att datan är KORREKT
		try {
			data = JSON.parse(dataAsString)
		} catch(error) {
			console.log('Datan i localStorage var i fel format. Felmeddelande: ', error.message)
			data = defaults
		}
	} else {
		// oh noes! Använd default-värden
		data = defaults
	}
	return data
}

export { save, load }
