document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll("nav a");

enlaces.forEach(función (enlace) {
enlace.addEventListener("click", function (evento) {
const targetId = this.getAttribute("href");

if (targetId.startsWith("#")) {
evento.preventDefault();

const targetSection = document.querySelector(targetId);

si (secciónobjetivo) {
targetSection.scrollIntoView({
comportamiento: "suave"
});
}
}
});
});
});
