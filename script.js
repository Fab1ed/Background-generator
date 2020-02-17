var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');

// Input colours match initial background color
color1.value = '#ff0000';
color2.value = '#ffff00';

// Background property on initial load
var style = window.getComputedStyle(body);
var bckgr = style.getPropertyValue('background');
css.textContent = bckgr;

// Random color generator
function roulette() {
    function colorGenerator() {
        var c1 = Math.floor(Math.random() * 256);
        var c2 = Math.floor(Math.random() * 256);
        var c3 = Math.floor(Math.random() * 256);
        return 'rgb(' + c1 + ', ' + c2 + ', ' + c3 + ')';
    }
    body.style.background = 'linear-gradient(to right, ' + colorGenerator() + ', ' + colorGenerator() + ')';
    css.textContent = body.style.background + ';';
}

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click', roulette)