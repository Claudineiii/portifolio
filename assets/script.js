const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

// Quando clicar no ícone.
menuIcon.onclick = () => {
  // Se não tem a classe 'active', ele coloca. Se já tem, ele tira.
  navLinks.classList.toggle("active");
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1, // Ativa quando 10% do elemento estiver visível
  },
);

// Seleciona todos os elementos que queremos animar
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el) => observer.observe(el));
