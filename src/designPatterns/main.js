
import { renderBooks, renderCart } from "./card.js"
import { initTabs } from './tabs.js'
import { initCounter } from './counter.js'
import { state } from "./store.js"
import { load } from "./storage.js"
import { initDialog } from './dialog.js'
import { initSortButtons } from "./sorting.js"

// Det första vi gör: kolla localStorage
let data = load()
state.counter = data.counter
state.selectedTab = data.selectedTab

// Card - första renderingen
renderBooks(state.books)
renderCart(state.cart)

// Tabs - sätta upp flikarna (initialisera)
initTabs()

// Counter - initialisera
initCounter()

// Dialogruta
initDialog()

// Sökfunktioner
initSortButtons()
