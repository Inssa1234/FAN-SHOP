const phrases = [
  "des produits de qualité.",
  "un service exceptionnel.",
  "des packs incroyables.",
  "Chez FAN-SHOP",
];
let currentPhrase = 0;

function changeText() {
  const textElement = document.getElementById("text");

  textElement.classList.add("hidden");

  setTimeout(() => {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    textElement.textContent = phrases[currentPhrase];
    textElement.classList.remove("hidden");
  }, 500);
}

setInterval(changeText, 4000);
changeText();

window.addEventListener("scroll", () => {
  let dialog = document.getElementById("scrollDialog");

  if (window.scrollY > 100) {
    dialog.classList.add("show");
  } else {
    dialog.classList.remove("show");
  }
  let dialog2 = document.getElementById("scrollDialog2");

  if (window.scrollY > 400) {
    dialog2.classList.add("show2");
  } else {
    dialog2.classList.remove("show2");
  }
  let dialog3 = document.getElementById("scrollDialog3");

  if (window.scrollY > 600) {
    dialog3.classList.add("show3");
  } else {
    dialog3.classList.remove("show3");
  }
});

function handleScroll() {
  const sections = document.querySelectorAll(".scroll-section");

  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Ajuster ce ratio pour personnaliser quand l'animation commence

    if (sectionPosition < screenPosition) {
      section.classList.add("show");
    }
  });
}

// Détecter l'événement scroll et appliquer l'animation
window.addEventListener("scroll", handleScroll);

// Initialiser l'animation au chargement de la page
handleScroll();
