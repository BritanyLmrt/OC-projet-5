// ****** Recette : Carroussel ; ******** Ingrédients : Slides, BulletsPoints, Flèches 

// Slides
const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// BulletsPoints
const dotsBox =  document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) { //boucle
  const dot = document.createElement('div');
  dot.classList.add('dot');

  if (i === 0) { //condition
    dot.classList.add('dot_selected');
  }

  dotsBox.appendChild(dot);
}

// Flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', function () {  
  changeSlide('left');
  console.log("C'est ok à gauche");
});

arrowRight.addEventListener('click', function () {
  changeSlide('right');
  console.log("C'est ok à droite");
});

// Carrousel
let index = 0;

const bannerElement = document.getElementById('banner');
const imageElement = bannerElement.querySelector('.banner-img');
const textElement = bannerElement.querySelector('p');

function changeSlide(directionClick) {	//function (appelé dans les events)
  if (directionClick === 'left') {	//condition
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
  } else if (directionClick === 'right') {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
  }

  const dotElements = document.querySelectorAll('.dot'); //boucle
  for (let i = 0; i < dotElements.length; i++) {
	const dot = dotElements[i];
	dot.classList.remove('dot_selected');
  }
  
  dotElements[index].classList.add('dot_selected');
  

  const currentSlide = slides[index];

  imageElement.src = currentSlide.image; 
  textElement.innerHTML = currentSlide.tagLine; 
}
