import { useEffect } from "react";

export const useChangeBackgroundColor = (number) => {
  const changeBackgroundColor = () => {
    const colors = [
      "#743696",
      "#714a48",
      "#2f77bd",
      "#0f6338",
      "#f4792e",
      "#ca5448",
    ];

    const selectColor = document.querySelector(".home-artistas");
    selectColor.style.background = colors[number - 1];
  };

  useEffect(() => {
    changeBackgroundColor();
  }, [number]);
};
