
import { renderBooks, renderCart } from "./card.js"
import { state } from "./store.js"

// Card - första renderingen
renderBooks(state.books)
renderCart(state.cart)

// Tabs - första renderingen
// TODO