/* Variavéis */
const login = document.getElementById("login");
const modal = document.getElementById("modal");
const close = document.querySelector(".fechar");
const submit = document.getElementById("btn");
const btn = document.querySelector(".hb");


/* Modal Abrir */
login.addEventListener("click", () => {
  modal.classList.add("active");
});
/* Modal Fechar */
close.addEventListener("click", () => {
  modal.classList.remove("active");
});
submit.addEventListener("click", () => {
  modal.classList.remove("active");
});

btn.addEventListener("click", () => {
  let menu = document.querySelector(".nav");
  menu.classList.toggle("active");
  btn.classList.toggle("active");

});
