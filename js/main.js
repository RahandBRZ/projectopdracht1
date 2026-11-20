/* =========================================================
   Socrates-website – JavaScript
   Functies volgens de sprint 01 planning:
   - toggleMobileMenu / closeMenuOnClick / highlightActivePage
   - initHero
   - renderTimeline / openLightbox
   - initPrincipleCards / expandPrinciple / showQuizQuestion
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  initHero();
  initMenu();
  renderTimeline();
  initPrincipleCards();
  initLightbox();
  initQuiz();
  highlightActivePage();
});

/* ---------- Navigatiemenu ---------- */

// Toggle het mobiele menu (hamburger) open en dicht.
function toggleMobileMenu() {
  var menu = document.getElementById('menuList');
  var knop = document.getElementById('menuKnop');
  if (!menu || !knop) return;
  var open = menu.classList.toggle('open');
  knop.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// Sluit het mobiele menu zodra er op een menuitem wordt geklikt.
function closeMenuOnClick() {
  var menu = document.getElementById('menuList');
  var knop = document.getElementById('menuKnop');
  if (!menu || !knop) return;
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      knop.setAttribute('aria-expanded', 'false');
    });
  });
}

// Markeert de actieve pagina in het menu.
function highlightActivePage() {
  var pad = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#menuList a').forEach(function (link) {
    var target = link.getAttribute('href');
    if (target === pad || (pad === '' && target === 'index.html')) {
      link.classList.add('actief');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initMenu() {
  var knop = document.getElementById('menuKnop');
  if (knop) {
    knop.addEventListener('click', toggleMobileMenu);
  }
  closeMenuOnClick();
}

/* ---------- Homepagina ---------- */

// Toont het hero-citaat met een korte fade-in bij het laden van de homepagina.
// De fallback met setTimeout zorgt ervoor dat de tekst altijd zichtbaar wordt,
// ook als requestAnimationFrame niet wordt uitgevoerd.
function initHero() {
  var citaat = document.getElementById('heroCitaat');
  if (!citaat) return;
  citaat.style.opacity = '0';
  citaat.style.transition = 'opacity 0.8s ease';

  var toon = function () { citaat.style.opacity = '1'; };

  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(toon);
  }
  setTimeout(toon, 50);
}

// Scrolt naar een sectie op de homepagina (gebruikt door de knoppen).
function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ---------- Biografiepagina ---------- */

// Markeert het huidige jaartal in de tijdlijn.
function renderTimeline() {
  var lijst = document.getElementById('tijdlijn');
  if (!lijst) return;
  var items = lijst.querySelectorAll('li');
  if (items.length > 0) {
    items[items.length - 1].classList.add('laatste');
  }
}

// Opent de portretfoto vergroot (lightbox-effect).
function openLightbox(bron) {
  var bestaand = document.getElementById('lightbox');
  if (bestaand) bestaand.remove();

  var overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.style.cssText =
    'position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;' +
    'align-items:center;justify-content:center;z-index:1000;cursor:zoom-out;';

  var img = document.createElement('img');
  img.src = bron;
  img.alt = 'Vergrote weergave van het portret van Socrates';
  img.style.cssText = 'max-width:90%;max-height:90%;border-radius:8px;';

  overlay.appendChild(img);
  overlay.addEventListener('click', function () { overlay.remove(); });
  document.body.appendChild(overlay);
}

function initLightbox() {
  var portret = document.getElementById('portret');
  if (portret) {
    portret.addEventListener('click', function () {
      openLightbox(portret.src);
    });
  }
}

/* ---------- Filosofiepagina ---------- */

// Zet de event listeners op de principe-kaartjes.
function initPrincipleCards() {
  document.querySelectorAll('.kaart-toggle').forEach(function (knop) {
    knop.addEventListener('click', function () {
      expandPrinciple(knop.closest('.kaart').dataset.id);
    });
  });
}

// Klapt het voorbeeldgedeelte van een principe-kaartje uit of dicht.
function expandPrinciple(id) {
  var kaart = document.querySelector('.kaart[data-id="' + id + '"]');
  if (!kaart) return;
  var open = kaart.classList.toggle('open');
  var knop = kaart.querySelector('.kaart-toggle');
  if (knop) knop.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// Toont een willekeurige socratische vraag in de quiz-sectie.
function showQuizQuestion() {
  var vragen = [
    'Wat bedoel je precies met een "goed leven"?',
    'Hoe weet je zeker dat je gelijk hebt?',
    'Zou je liever ongelijk hebben en het niet weten, dan gelijk hebben zonder het te bewijzen?',
    'Wat is moed &mdash; en wanneer was jij voor het laatst moedig?',
    'Als kennis deugd is: waarom doen mensen dan iets kwaads?'
  ];
  var uitvoer = document.getElementById('quizVraag');
  if (!uitvoer) return;
  var huidig = uitvoer.dataset.index !== undefined ? parseInt(uitvoer.dataset.index, 10) : -1;
  var volgend = (huidig + 1) % vragen.length;
  uitvoer.dataset.index = volgend;
  uitvoer.innerHTML = vragen[volgend];
}

function initQuiz() {
  var knop = document.getElementById('quizKnop');
  if (knop) {
    knop.addEventListener('click', showQuizQuestion);
  }
}
