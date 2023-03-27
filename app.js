let btnMenu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let closeButton = document.querySelector('.fa-solid');

console.log(btnMenu);
console.log(closeButton);

function showMenu() {
    btnMenu.onclick = () => {
      navbar.style.display = 'block';
    }
}

function hideMenu() {
     closeButton.onclick= () => {
        navbar.style.display = 'none';
    }
}

