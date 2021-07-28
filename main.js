const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

//Abrir ee fehca o menu
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// quando clicar em um item, fechar o menu ou esconder
const links = document.querySelectorAll("nav ul li .title");
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// mudar o header da pagina quando der scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (this.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
