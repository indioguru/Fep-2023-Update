export const filterActive = (classItem) => {
  const items = document.querySelectorAll(".filtro_item");
  const item = document.querySelector(`.${classItem}`);

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("filtro_item_active");
  }

  item.classList.add("filtro_item_active");
};
