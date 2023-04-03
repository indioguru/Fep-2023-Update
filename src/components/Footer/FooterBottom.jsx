export const FooterBottom = ({ idioma }) => {
  return (
    <div className="footer_bottom">
      <div className="containerAll">
        <p>© FESTIVAL ESTÉREO PICNIC 2023</p>
        <a target="_blank" href="https://paramopresenta.com/politicas.pdf">
          {idioma === "ESP" ? (
            <> Política de privacidad</>
          ) : (
            <>Privacy Policy</>
          )}
        </a>
        <a href="mailto:info@paramopresenta.com">
          {idioma === "ESP" ? (
            <> Información y PQR'S: info@paramopresenta.com</>
          ) : (
            <>Information and inquiries : info@paramopresenta.com</>
          )}
        </a>
      </div>
    </div>
  );
};
