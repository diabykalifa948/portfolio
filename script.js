// Menu mobile (ouverture/fermeture)
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('ouvert');
  });
  menu.querySelectorAll('a').forEach(lien => {
    lien.addEventListener('click', () => menu.classList.remove('ouvert'));
  });
}

// Année automatique dans le footer
const anneeEl = document.getElementById('annee');
if (anneeEl) {
  anneeEl.textContent = new Date().getFullYear();
}
