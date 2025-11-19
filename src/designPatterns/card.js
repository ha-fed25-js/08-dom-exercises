import { books } from './books.js'

const cardSection = document.querySelector('.cards')
const lowerPriceButton = document.querySelector('#card-lower-price')
const higherPriceButton = document.querySelector('#card-higher-price')


// Denna funktion kan skapa DOM-element och lägga in på webbsidan
function renderBooks(books) {
	// Ta bort allt innehåll från ".cards"
	cardSection.innerHTML = ''
	// Alternativt sätt - krångligare
	// cardSection.querySelectorAll('.card').forEach(element => element.remove())


	books.forEach(book => {
		let div = document.createElement('div')
		div.classList.add('card')
		div.innerHTML = `<h2> ${book.title} </h2>
		<p class="author"> ${book.author} </p>
		<p class="price"> ${book.price} kr </p>
		<div class="comments"></div>
		`

		// Säkert sätt att lägga in osäker data (sådan som kommer från användare)
		// let commentContainer = div.querySelector('.comments')
		// commentContainer.textContent = 'Unsafe user comments'

		cardSection.append(div)
	})
}

lowerPriceButton.addEventListener('click', () => {
	// Använd ({}) för att returnera ett objekt från en arrow function
	let cheapBooks = books.map(book => ({
		...book,
		price: Math.round(book.price * 0.9)
	}))
	renderBooks(cheapBooks)
})

higherPriceButton.addEventListener('click', () => {
	let expensiveBooks = books.map(book => ({
		...book,
		price: Math.round(book.price * 1.1)
	}))
	renderBooks(expensiveBooks)
})


renderBooks(books)
