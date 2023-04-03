import { useEffect, useState } from "react";

export const useFindByName = (name, items ) => {
  const [state, setState] = useState({});

  useEffect(() => {
    if (items.length > 0) {
      const nameToFind = name.split("-").join(" ").toLowerCase();

      const itemFound = items.filter((item) =>
        item.nombre
          .toLowerCase()
          .split("-")
          .join(" ")
          .toLowerCase()
          .includes(nameToFind.toLowerCase())
      );

      if (itemFound.length > 1) {
        const finalItem = itemFound.filter(
          (item) => item.nombre.length === nameToFind.length
        );
        return setState(finalItem[0]);
      }

      if (itemFound[0] !== undefined) {
        setState(itemFound[0]);
      }
    }
  }, [name, items]);

  return {
    state,
  };
};
