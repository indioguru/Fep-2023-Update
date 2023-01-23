export const middleScreen = (elemento, clase, heightTotal) => {
  const contenido = document.querySelector(`.${elemento}`);

  if (contenido !== null) {
    const rect = contenido.getBoundingClientRect();

    if (rect.top / 2 <= heightTotal / 2 / 2) {
      contenido.classList.add(clase);
    } else {
      contenido.classList.remove(clase);
    }
  }
};

export const scrollElement = (itemsClass, classAnimation) => {
  const heightTotal = window.innerHeight;
  let items = document.querySelectorAll(`.${itemsClass}`);

  console.log(items)
  if (items.length >= 2) {
    for (let i = 0; items.length > i; i++) {
      middleScreen(`${itemsClass}_${i + 1}`, classAnimation, heightTotal);
    }
  } else {
    middleScreen(itemsClass, classAnimation, heightTotal);
  }
};
