import { books } from './books.js'

const cardSection = document.querySelector('.cards')

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
