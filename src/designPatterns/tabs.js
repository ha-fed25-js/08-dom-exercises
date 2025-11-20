function initTabs() {
	const tabHeaders = document.querySelectorAll('.tab-headings > *')
	const tabPanels = document.querySelectorAll('.tab-content > *')

	tabHeaders.forEach((tabHeader, index) => {
		tabHeader.addEventListener('click', () => {
			// Ta bort klassen 'selected' från alla, lägg sedan till den till elementet vi klickade på
			tabHeaders.forEach(th => th.classList.remove('selected'))
			tabHeader.classList.add('selected')

			tabPanels.forEach(tp => tp.classList.add('hidden'))
			tabPanels[index].classList.remove('hidden')
		})
	})

}

export { initTabs }
