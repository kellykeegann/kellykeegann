{
  const slider = document.getElementById('slider');
  const leftButton = document.getElementById('slide-left');
  const rightButton = document.getElementById('slide-right');

  let index = 0;
  const MIN_INDEX = -1;
  const MAX_INDEX = slider.children.length - 3;

  const updateSlide = (change) => {
    const newIndex = index + change;
    if (newIndex < MIN_INDEX || newIndex > MAX_INDEX) return;

    slider.children[index + 1].classList.remove('is-middle');
    slider.children[index + 2].classList.remove('is-middle');

    index = newIndex;
    slider.style.left = `calc(${-index} * 100% / 4)`;

    slider.children[index + 1].classList.add('is-middle');
    slider.children[index + 2].classList.add('is-middle');
  };

  updateSlide(0);
  leftButton.addEventListener('click', () => updateSlide(-1));
  rightButton.addEventListener('click', () => updateSlide(1));
}
