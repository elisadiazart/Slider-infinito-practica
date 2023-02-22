// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// import catImage from '../assets/images/cat.jpg';
// const img = document.createElement('img')
// img.src = catImage

let counter = 0;

const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const sliderElement = document.getElementById('slider');
const rootStyes = document.documentElement.style;

const desplaceImage = () => {
  if (counter > 0) rootStyes.setProperty('--translate', `-${counter}00%`);
  else rootStyes.setProperty('--translate', `-${counter}`);
};

nextButton.addEventListener('click', () => {
  if (counter === sliderElement.children.length - 1) {
    sliderElement.append(sliderElement.firstElementChild);
    rootStyes.setProperty('transition', 'none');
    counter--;
    desplaceImage();
  } else {
    counter++;
    console.log(counter);
    desplaceImage();
  }
});

backButton.addEventListener('click', () => {
  if (counter === 0) {
    sliderElement.prepend(sliderElement.lastElementChild);
    counter++;
  } else counter--;
  desplaceImage();
});
