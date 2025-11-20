import { state } from "./store.js"

// DOM-element
const cardSection = document.querySelector('.cards')
const lowerPriceButton = document.querySelector('#card-lower-price')
const higherPriceButton = document.querySelector('#card-higher-price')
const cartContainer = document.querySelector('.card-cart .cart')


// -------- Renderingsfunktioner --------

// Denna funktion kan skapa DOM-element och lägga in på webbsidan
// Listan med böcker (med eller utan rabatt)
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
		<button> Köp </button>
		`

		// Säkert sätt att lägga in osäker data (sådan som kommer från användare)
		// let commentContainer = div.querySelector('.comments')
		// commentContainer.textContent = 'Unsafe user comments'

		div.querySelector('button').addEventListener('click', () => {
			// console.log('TEST: klickade på bokens köp-knapp')
			state.cart.push(book)  // <- GOOD
			// cart.push(`Bokens titel ... bokens pris`)  <- BAD
			renderCart(state.cart)
		})

		cardSection.append(div)
	})
}

// Kundvagnen (lista med böcker man ska köpa)
function renderCart(cartItems) {
	// console.log('TEST: renderar kundvagnen')
	// Rensa containern
	cartContainer.innerHTML = ''

	cartItems.forEach(item => {
		let li = document.createElement('li')
		li.classList.add('cart-item')
		li.textContent = `${item.title} ... ${item.price}`
		cartContainer.append(li)
	})
}


// ---------- Event listeners -----------

lowerPriceButton.addEventListener('click', () => {
	// Använd ({}) för att returnera ett objekt från en arrow function
	let cheapBooks = state.books.map(book => ({
		...book,
		price: Math.round(book.price * 0.9)
	}))
	renderBooks(cheapBooks)
})

higherPriceButton.addEventListener('click', () => {
	let expensiveBooks = state.books.map(book => ({
		...book,
		price: Math.round(book.price * 1.1)
	}))
	renderBooks(expensiveBooks)
})

export { renderBooks, renderCart }


/*
<div class="card-cart">
	<h1> Kundvagn </h1>
	<ul class="cart">
		<li class="cart-item">
			Bokens titel ... Bokens pris
		</li>
	</ul>
</div>
*/
