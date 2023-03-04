const navLinks1 = document.createElement('a');
const navLinks2 = document.createElement('a');
const navLinks3 = document.createElement('a');
const navLinks4 = document.createElement('a');
const navLinks5 = document.createElement('a');
const navLinks6 = document.createElement('a');

const modrinth = 'https://modrinth.com'

navLinks1.innerHTML = '<a class="nav-link" href="' + modrinth + '/mods" target="_blank"><i class="fa-solid fa-coffee-bean" title="Mods"></i></a>'
navLinks2.innerHTML = '<a class="nav-link" href="' + modrinth + '/plugins" target="_blank"><i class="fa-solid fa-puzzle-piece-simple" title="Plugins"></i></a>'
navLinks3.innerHTML = '<a class="nav-link" href="' + modrinth + '/datapacks" target="_blank"><i class="fa-solid fa-database" title="Datapacks"></i></a>'
navLinks4.innerHTML = '<a class="nav-link" href="' + modrinth + '/shaders" target="_blank"><i class="fa-solid fa-umbrella-beach" title="Shaders"></i></a>'
navLinks5.innerHTML = '<a class="nav-link" href="' + modrinth + '/resourcepacks" target="_blank"><i class="fa-solid fa-eye" title="Resourcepacks"></i></a>'
navLinks6.innerHTML = '<a class="nav-link" href="' + modrinth + '/modpacks" target="_blank"><i class="fa-solid fa-coffee-beans" title="Modpacks"></i></a>'

const navBar = document.querySelector('#navbar');

navBar.appendChild(navLinks1)
navBar.appendChild(navLinks2)
navBar.appendChild(navLinks3)
navBar.appendChild(navLinks4)
navBar.appendChild(navLinks5)
navBar.appendChild(navLinks6)

var supportMeLink = document.querySelector('a[href="#supportme"]');

supportMeLink.addEventListener('click', function(event) {
  event.preventDefault();
  var supportMeElement = document.querySelector('#supportme');

  supportMeElement.classList.toggle('hidden');
  supportMeLink.textContent.toggle('Back')
});

