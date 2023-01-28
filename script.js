const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toogleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const textBox = document.getElementById("text-box");

// dark mode
function darkmode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    toogleIcon.children[0].textContent = 'Dark Mode';
    toogleIcon.children[1].classList.remove('fa-sun');
    toogleIcon.children[1].classList.add('fa-moon');

}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
    toogleIcon.children[0].textContent = 'Light Mode';
    toogleIcon.children[1].classList.remove('fa-moon');
    toogleIcon.children[1].classList.add('fa-sun');
}


// Switch theam

function switchTheam(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', "dark");
        darkmode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event listenre

toggleSwitch.addEventListener("change", switchTheam);

// CHECK LOCAL STORAGE FOR THEME
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkmode();
    }
}