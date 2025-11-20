// "store" kallar vi "platsen" i en JS-app där vi sparar appens "state"
import { books } from "./books.js"

const state = {
	cart: [],
	books: books
}

export { state }
