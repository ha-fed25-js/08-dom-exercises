import { renderBooks } from "./card.js"
import { state } from "./store.js"

const sortTitle = document.querySelector('#sort-by-title')
const sortAuthor = document.querySelector('#sort-by-author')
const sortPriceAsc = document.querySelector('#sort-by-price-asc')
const sortPriceDesc = document.querySelector('#sort-by-price-desc')

function initSortButtons() {
	// console.log('init sort buttons!')

	sortTitle.addEventListener('click', () => {
		// console.log('sort title event listener click')
		state.books.sort((a, b) => {
			// -1 om a kommer före b
			// +1 om b kommer före a
			// 0 om a och b är lika
			if( a.title < b.title ) { return -1 }
			else if( a.title > b.title ) { return 1 }
			else return 0
		})
		renderBooks(state.books)
	})

	sortAuthor.addEventListener('click', () => {
		state.books.sort((a, b) => {
			if( a.author < b.author ) { return -1 }
			else if( a.author > b.author ) { return 1 }
			else return 0
		})
		renderBooks(state.books)
	})

	sortPriceAsc.addEventListener('click', () => {
		state.books.sort((a, b) => a.price - b.price)
		renderBooks(state.books)
	})
	sortPriceDesc.addEventListener('click', () => {
		state.books.sort((a, b) => b.price - a.price)
		renderBooks(state.books)
	})

}

export { initSortButtons }

/*
{
	id: 1,
	title: "Mannen som lekte med elden",
	author: "Stieg Larsson",
	genre: "Deckare",
	price: 149
},
*/