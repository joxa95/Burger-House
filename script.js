const bars = document.querySelector('.fa-bars');
const back = document.querySelector('.fa-times');
const nav = document.querySelector('.nav');
const navH1 = document.querySelectorAll('.nav h1');
const circle = document.querySelector('.menu');
const content = document.querySelector('.content');

bars.addEventListener('click', () => {
	nav.classList.add('active');
	navH1.forEach(e => {
		e.classList.add('h1-active');
	});
	circle.classList.add('active');
	content.classList.add('active');
});

back.addEventListener('click', () => {
	nav.classList.remove('active');
	navH1.forEach(e => {
		e.classList.remove('h1-active');
	});
	circle.classList.remove('active');
	content.classList.remove('active');
});
