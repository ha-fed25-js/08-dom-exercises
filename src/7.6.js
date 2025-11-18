
const buttonNext = document.querySelector('#button-next')
const top = document.querySelector('.top')
const middle = document.querySelector('.middle')
const bottom = document.querySelector('.bottom')

// console.log('Finns elementen?', buttonNext, top, middle, bottom)
let state = 0  // rött ljus

buttonNext.addEventListener('click', () => {
	top.classList.remove('on')
	middle.classList.remove('on')
	bottom.classList.remove('on')
	if( state === 0 ) {
		// Röd lampa lyser -> tänd röd och gul
		top.classList.add('on')
		middle.classList.add('on')
	}
	else if( state === 1 ) {
		// Röd och gul lyser -> tänd grön
		bottom.classList.add('on')
	}
	else if( state === 2 ) {
		// Grön lyser -> tänd gul
		middle.classList.add('on')
	}
	else if( state === 3 ) {
		// Gul lyser -> tänd röd
		top.classList.add('on')
	}
	state = (state + 1) % 4
})
