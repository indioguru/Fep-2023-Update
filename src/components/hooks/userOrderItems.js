import { useEffect, useState } from "react";

export const userOrderItems = (items) => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const itemsSort = items.sort((a, b) => a.orden - b.orden);
    setstate(itemsSort);
  }, [items]);

  return {
    state,
  };
};
