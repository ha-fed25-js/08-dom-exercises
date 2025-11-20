
import { renderBooks, renderCart } from "./card.js"
import { initTabs } from './tabs.js'
import { state } from "./store.js"

// Card - första renderingen
renderBooks(state.books)
renderCart(state.cart)

// Tabs - sätta upp flikarna (initialisera)
initTabs()
