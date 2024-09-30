const opacityButton = document.querySelector('.about-me__btn--opacity')
const flex1Div = document.querySelector('.flex-1')
const myProjects = document.getElementById('projects')

opacityButton.addEventListener('click', () => {
  const currentOpacityFlex1 = window.getComputedStyle(flex1Div).getPropertyValue('opacity');
  const currentOpacityProjects = window.getComputedStyle(myProjects).getPropertyValue('opacity');

  if (currentOpacityFlex1 === '1' && currentOpacityProjects === '1') {
    flex1Div.style.opacity = 0;
    myProjects.style.opacity = 0;
  } else {
    flex1Div.style.opacity = 1;
    myProjects.style.opacity = 1;
  }
})