const points = document.querySelectorAll('.point');
const point_selected = document.querySelector('.point_selected');
const button = document.querySelectorAll('.button');

const ver = x => console.log(x);

var point = 0;

points.forEach(el => el.addEventListener('focus', event => point = event.target.textContent));
button[0].addEventListener('click', () => {
    const hidden = document.querySelector('.hidden');
    const to_points = document.querySelector('.to_points');
    to_points.style.display = 'none';

    hidden.style.display = 'block';
    point_selected.textContent = point
})