import { FooterLogos, FooterRedes, FooterBottom } from "./index";

export const Footer = ({ idioma }) => {
  return (
    <div className="footer">
      <div className="containerAll">
        <FooterRedes />
        <FooterLogos />
      </div>
      <FooterBottom idioma={idioma} />
    </div>
  );
};
