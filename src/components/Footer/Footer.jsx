import React from "react";
import Media from "react-media";

export const Footer = ({ idioma }) => {
  return (
    <div className="footer">
      <div className="containerAll">
        {/* REDES */}
        <div className="redes">
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-footer"
            href="https://www.instagram.com/festereopicnic/?hl=en"
          >
            <img src="/assets/etapa5/footer/instagram.png" alt="red social" />
          </a>
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-footer"
            href="https://www.facebook.com/festivalestereopicnic/"
          >
            <img src="/assets/etapa5/footer/facebook.png" alt="red social" />
          </a>
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-footer"
            href="https://mobile.twitter.com/festereopicnic_"
          >
            <img src="/assets/etapa5/footer/twitter.png" alt="red social" />
          </a>
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-footer"
            href="https://open.spotify.com/playlist/37i9dQZF1DWUfEH87eTMRz"
          >
            <img src="/assets/etapa5/footer/spotify.png" alt="red social" />
          </a>
          <a target="_blank" className="ga4-call_to_action-rrss-footer" href="">
            <img src="/assets/etapa5/footer/tiktok.png" alt="red social" />
          </a>
        </div>

        <Media query="(max-width: 999px)">
          {(resolution) => {
            return resolution ? (
              <img src="/assets/home/logosmovil.png" alt="logosmovil" />
            ) : (
              <img src="/assets/home/logoswebfep.png" alt="logoswebfep" />
            );
          }}
        </Media>
        {/* {window.innerWidth > 999 ? (
          <img src="/assets/home/logoswebfep.png" alt="logoswebfep" />
        ) : (
          <img src="/assets/home/logosmovil.png" alt="logosmovil" />
        )} */}
      </div>

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
    </div>
  );
};
