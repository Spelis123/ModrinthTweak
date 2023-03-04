setInterval(() => {}, 10)

const linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('href', 'https://rawcdn.githack.com/hung1001/font-awesome-pro-v6/44659d9/css/all.css');
document.head.appendChild(linkElement);

const navLinks1 = document.querySelector('.nav-link[href="/mods"] > span');
const navLinks2 = document.querySelector('.nav-link[href="/plugins"] > span');
const navLinks3 = document.querySelector('.nav-link[href="/datapacks"] > span');
const navLinks4 = document.querySelector('.nav-link[href="/shaders"] > span');
const navLinks5 = document.querySelector('.nav-link[href="/resourcepacks"] > span');
const navLinks6 = document.querySelector('.nav-link[href="/modpacks"] > span');

navLinks1.innerHTML = '<i class="fa-solid fa-coffee-bean" title="Mods"></i>'
navLinks2.innerHTML = '<i class="fa-solid fa-puzzle-piece-simple" title="Plugins"></i>'
navLinks3.innerHTML = '<i class="fa-solid fa-database" title="Datapacks"></i>'
navLinks4.innerHTML = '<i class="fa-solid fa-umbrella-beach" title="Shaders"></i>'
navLinks5.innerHTML = '<i class="fa-solid fa-eye" title="Resourcepacks"></i>'
navLinks6.innerHTML = '<i class="fa-solid fa-coffee-beans" title="Modpacks"></i>'

const versioncarddiv = document.querySelectorAll('hr.card-divider')[3];
const versionlabel = document.querySelectorAll('div.card.normal-page__info div.featured-header');
const versiondiv = document.querySelectorAll('div.featured-version');

if (versioncarddiv && versionlabel && versiondiv) {
versioncarddiv.remove();
versionlabel.remove();
versiondiv.remove();
}