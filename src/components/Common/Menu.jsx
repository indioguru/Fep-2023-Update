import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <div className="hamburguesa" onClick={toggleMenu}>
        <img src="/assets/etapa5/menu/hamburguesa.png" alt="hamburguesa" />
      </div>

      <div className="botones_home">
        {/* <a
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
          className="principalButtom buttom_pink"
        >
          ALCANCÍA
        </a> */}
        <a
          target="_blank"
          href="https://www.entradasamarillas.com/event/fep-2023-internacional"
          className="principalButtom boton_sin_background"
        >
          {idioma === "ESP" ? (
            <> COMPRAS INTERNACIONALES</>
          ) : (
            <>INTERNATIONAL PURCHASES</>
          )}
        </a>

        <a
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
          className="principalButtom buttom_orange ga4-call_to_action-entradas-sticky_header"
        >
          {idioma === "ESP" ? <> ENTRADAS</> : <>TICKETS</>}
        </a>
      </div>

      {window.innerWidth < 999 && (
        <div onClick={showEntradas}>
          <div className="boton_entradaMovil">
            <img
              className="entradaicono"
              src="/assets/etapa4/entradasmovil.png"
              alt="entradasmovil"
            />
            <img
              className="menosicono"
              src="/assets/etapa4/menos.png"
              alt="entradasmovil"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
