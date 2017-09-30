window.onload = function () {
	const burger = document.querySelector('.navbar-burger');
	const menu = document.querySelector('.navbar-menu');

	burger.addEventListener('click', () => {
		console.log('click');
		menu.classList.toggle('is-active');
	});
};