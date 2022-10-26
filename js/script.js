/*
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
*/

const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg'
];

const eleSlider = document.querySelector('.slider');
const eleBtnTop = document.querySelector('.btn-top');
const eleBtnBottom = document.querySelector('.btn-bottom');

for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}

const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;

eleBtnBottom.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

	activeIndex++;

	listEleImg[activeIndex].classList.add('active');

	eleBtnTop.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleBtnBottom.classList.add('hidden');
	}
});

eleBtnTop.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

	activeIndex--;

	listEleImg[activeIndex].classList.add('active');

	eleBtnBottom.classList.remove('hidden');
	if (activeIndex === 0) {
		eleBtnTop.classList.add('hidden');
	}
});