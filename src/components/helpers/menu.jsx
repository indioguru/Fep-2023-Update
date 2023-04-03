export const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  menu.classList.toggle("menu_active");
  body.classList.toggle("noScroll");
};

export const showEntradas = () => {
  const boton_entradaMovil = document.querySelector(".boton_entradaMovil");
  const botones_home = document.querySelector(".botones_home");
  botones_home.classList.toggle("active_botones");
  boton_entradaMovil.classList.toggle("active_botonMovil");
};
