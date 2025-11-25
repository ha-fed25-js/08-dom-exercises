const showDialog = document.querySelector('#show-dialog')
const hideDialog = document.querySelector('#hide-dialog')
const overlay = document.querySelector('.overlay')
const dialog = overlay.querySelector('dialog')


export function initDialog() {

	showDialog.addEventListener('click', () => {
		overlay.classList.remove('hidden')
		dialog.show()
	})

	function hideTheDialog() {
		dialog.close()
		overlay.classList.add('hidden')
	}
	hideDialog.addEventListener('click', hideTheDialog)
	overlay.addEventListener('click', hideTheDialog)
	dialog.addEventListener('click', e => e.stopPropagation())
	overlay.addEventListener('keydown', event => {
		// console.log('Tangent: ', event.key)
		if( event.key === 'Escape' ) {
			hideTheDialog()
		}
	})
}