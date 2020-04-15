{
  const sliders = document.getElementsByClassName('slider-shops__images');
  const leftButton = document.getElementsByClassName(
    'slider-shops__slide-left'
  );
  const rightButton = document.getElementsByClassName(
    'slider-shops__slide-right'
  );

  let index = Array.from({ length: Array.from(sliders).length }).map(() => 0);

  const updateSlide = (change, sliderIndex) => {
    const newIndex = index[sliderIndex] + change;

    const slider = sliders[sliderIndex];
    if (newIndex < 0 || newIndex > slider.children.length - 4) return;

    if (newIndex === 0) {
      leftButton[sliderIndex].classList.add('hide');
    } else if (index[sliderIndex] === 0) {
      leftButton[sliderIndex].classList.remove('hide');
    }

    if (newIndex === slider.children.length - 4) {
      rightButton[sliderIndex].classList.add('hide');
    } else if (index[sliderIndex] === slider.children.length - 4) {
      rightButton[sliderIndex].classList.remove('hide');
    }

    index[sliderIndex] = newIndex;
    slider.style.left = `calc(${-index[sliderIndex]} * 100% / 4)`;
  };

  Array.from(leftButton).forEach((button, idx) => {
    button.addEventListener('click', () => updateSlide(-1, idx));
  });
  Array.from(rightButton).forEach((button, idx) => {
    button.addEventListener('click', () => updateSlide(1, idx));
  });
  Array.from(sliders).forEach((slider, idx) => {
    const itemsCount = slider.children.length;
    slider.style.width = `calc(100% / 4 * ${itemsCount})`;
    updateSlide(0, idx);
    Array.from(slider.children).forEach((child) => {
      child.style.width = `calc(100% / ${itemsCount})`;
    });
  });
}
