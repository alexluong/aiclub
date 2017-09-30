window.onload = function () {
	const button = document.getElementById('trigger');
	const dropdown = document.getElementById('dropdown');
	const burger = document.querySelector('.navbar-burger');
	const menu = document.querySelector('.navbar-menu');

	button.addEventListener('click', () => {
		console.log('click');
  	dropdown.classList.toggle('is-active');
	});

	burger.addEventListener('click', () => {
		console.log('click');
		menu.classList.toggle('is-active');
	});
};