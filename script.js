const bars = document.querySelector('.fa-bars');
const back = document.querySelector('.fa-times');
const nav = document.querySelector('.nav');
const navH1 = document.querySelectorAll('.nav h1');
const content = document.querySelector('.content');

bars.addEventListener('click', () => {
	nav.classList.add('active');
	back.classList.add('active');
	navH1.forEach(e => {
		e.classList.add('h1-active');
	});
	content.classList.add('rotate');
	bars.classList.add('rotate');
	// back.classList.remove('active');
});

back.addEventListener('click', () => {
	nav.classList.remove('active');
	back.classList.remove('active');
	navH1.forEach(e => {
		e.classList.remove('h1-active');
	});
	content.classList.remove('rotate');
	bars.classList.remove('rotate');
});
