/*
	<section class="streaming-container">
		<p> Profiler </p>
		<input id="profile-name" type="text" />
		<button id="add-profile"> Lägg till profil </button>
		<ul id="profile-list"></ul>
	</section>*/

	const inputProfile = document.querySelector('#profile-name')
	const buttonAddProfile = document.querySelector('#add-profile')
	const profileList = document.querySelector('#profile-list')

	let count = 1

	buttonAddProfile.addEventListener('click', () => {
		const newName = inputProfile.value
		console.log('Klickade add-knappen och värdet är:', newName)

		const li = document.createElement('li')
		li.innerText = `Profil ${count}: ${newName}`

		const removeButton = document.createElement('button')
		removeButton.innerText = 'Ta bort'
		removeButton.classList.add('remove')
		li.append(removeButton)

		removeButton.addEventListener('click', () => {
			li.remove()
		})
		let id = null
		removeButton.addEventListener('mouseenter', () => {
			console.log('hover event')
			id = setInterval(() => {
				console.log('blink interval')
				removeButton.classList.toggle('blink')
			}, 200)
		})
		removeButton.addEventListener('mouseleave', () => {
			clearInterval(id)
			removeButton.classList.remove('blink')
		})

		profileList.append(li)
		
		count++
	})