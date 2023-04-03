import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Header } from "../Common/Header";
import { Notification } from "../Common/Notification";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import { Routes } from "./Routes";
import { ScrollToTop } from "./ScrollToTop";

export const AppRouter = () => {
  const [idioma, setIdioma] = useState("ESP");

  useEffect(() => {
    const lenguaje = localStorage.getItem("idioma");
    if (lenguaje === null || lenguaje === "ESP") {
      setIdioma("ESP");
    } else {
      setIdioma("ING");
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Notification />
      <Header idioma={idioma} />
      <Routes idioma={idioma} />
      <Footer idioma={idioma} />
      <Menu setIdioma={setIdioma} idioma={idioma} />
    </Router>
  );
};
