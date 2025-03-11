// Carousel Functionality
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = Array.from(track.children);
let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
setInterval(() => showSlide(currentSlide + 1), 5000);
showSlide(0);
window.addEventListener('resize', () => showSlide(currentSlide));

// SPA Navigation for Event Details
const mainContent = document.getElementById('main-content');
const detailSections = document.querySelectorAll('.event-detail');
const pickCards = document.querySelectorAll('.pick-card');
const backButtons = document.querySelectorAll('.back-btn');

function showMain() {
  detailSections.forEach(section => section.classList.add('hidden'));
  mainContent.classList.remove('hidden');
}
function showDetail(detailId) {
  mainContent.classList.add('hidden');
  document.getElementById(detailId).classList.remove('hidden');
}

pickCards.forEach(card => {
  card.addEventListener('click', () => {
    const detailId = card.getAttribute('data-detail');
    showDetail(detailId);
    history.pushState({ page: "detail", id: detailId }, "", "#" + detailId);
    window.scrollTo(0, 0);
  });
});

backButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    history.back();
  });
});

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.page === "detail") {
    showDetail(event.state.id);
  } else {
    showMain();
  }
});

window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const detailId = hash.substring(1);
    if (document.getElementById(detailId)) {
      showDetail(detailId);
      history.replaceState({ page: "detail", id: detailId }, "", hash);
    }
  } else {
    showMain();
    history.replaceState({ page: "main" }, "", window.location.pathname);
  }
});

// Toggle waitlist table for Jia Le
const buyTicketsBtnJiaLe = document.getElementById('buyTicketsBtnJiaLe');
const ticketsSectionJiaLe = document.getElementById('ticketsSectionJiaLe');
if(buyTicketsBtnJiaLe && ticketsSectionJiaLe) {
  buyTicketsBtnJiaLe.addEventListener('click', () => {
    ticketsSectionJiaLe.classList.toggle('open');
  });
}

// Toggle waitlist table for Devin Gray
const buyTicketsBtnDevin = document.getElementById('buyTicketsBtnDevin');
const ticketsSectionDevin = document.getElementById('ticketsSectionDevin');
if(buyTicketsBtnDevin && ticketsSectionDevin) {
  buyTicketsBtnDevin.addEventListener('click', () => {
    ticketsSectionDevin.classList.toggle('open');
  });
}

// Toggle waitlist table for Adrian Saw
const buyTicketsBtnAdrian = document.getElementById('buyTicketsBtnAdrian');
const ticketsSectionAdrian = document.getElementById('ticketsSectionAdrian');
if(buyTicketsBtnAdrian && ticketsSectionAdrian) {
  buyTicketsBtnAdrian.addEventListener('click', () => {
    ticketsSectionAdrian.classList.toggle('open');
  });
}
