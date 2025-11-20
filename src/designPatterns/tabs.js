import { state } from './store.js'
import { save } from './storage.js'

function initTabs() {
	const tabHeaders = document.querySelectorAll('.tab-headings > *')
	const tabPanels = document.querySelectorAll('.tab-content > *')

	tabHeaders.forEach((tabHeader, index) => {
		tabHeader.classList.remove('selected')
		tabHeader.addEventListener('click', () => {
			// Ta bort klassen 'selected' från alla, lägg sedan till den till elementet vi klickade på
			tabHeaders.forEach(th => th.classList.remove('selected'))
			tabHeader.classList.add('selected')

			tabPanels.forEach(tp => tp.classList.add('hidden'))
			tabPanels[index].classList.remove('hidden')

			// Spara vilken vi klickade på i state och localStorage
			state.selectedTab = index
			save()
		})
	})

	tabHeaders[state.selectedTab].classList.add('selected')
	tabPanels[state.selectedTab].classList.remove('hidden')
}

export { initTabs }
