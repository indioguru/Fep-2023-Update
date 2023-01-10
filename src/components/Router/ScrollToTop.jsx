import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ScrollToTop = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
    
      }
    });
    return () => unlisten();
  }, []);
  return null;
};
