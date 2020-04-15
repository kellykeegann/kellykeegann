const plus = document.getElementById('counter-plus');
const min = document.getElementById('counter-min');
const content = document.getElementById('counter-content');

plus.addEventListener('click', () => {
  content.textContent = parseInt(content.textContent) + 1;
});
min.addEventListener('click', () => {
  const contentText = parseInt(content.textContent);
  if (contentText <= 1) return;
  content.textContent = contentText - 1;
});
