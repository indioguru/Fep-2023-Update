import React, { useEffect, useState } from "react";
import { getVip } from "../../api/api";
import { Beneficio } from "./Beneficios/Beneficio";
import { Entradas } from "./Entradas/Entradas";
import { GaleriaFinal } from "./GaleriaFinal/GaleriaFinal";

export const Vip = () => {
  const [vipPage, setVipPage] = useState({});

  useEffect(() => {
    getVip().then((data) => setVipPage(data.data));
  }, []);

  return (
    <div className="vip">
      <div className="vip_banner">
        <div className="containerAll">
          <img
            className="logo_pages"
            src="/assets/etapa4/logodesktop.png"
            alt="logodesktop"
          />
          <h2>BENEFICIOS VIP</h2>
          <p className="info">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata.
            <a className="principalButtom" href="">COMPRAR ENTRADAS</a>
          </p>

          <img
            className="personajevip"
            src="/assets/vip/personajevip.png"
            alt="imagen"
          />
          <img className="umd" src="/assets/vip/umd.png" alt="imagen" />
        </div>
        <img className="arbusto" src="/assets/vip/arbusto.png" alt="imagen" />
        <div className="suelo"></div>
      </div>
      {Object.keys(vipPage).length > 0 && (
        <>
          {/* ZONA VIP */}
          <Beneficio
            beneficioClass="beneficio_zona_vip"
            titulo={vipPage.titulo_ZONA_VIP}
            descripcion={vipPage.descripcion_ZONA_VIP}
            galeria={vipPage.galeria_ZONA_VIP}
            imagen="/assets/vip/planta_rama.png"
          />

          {/* BAÑOS */}
          <Beneficio
            beneficioClass="beneficio_banos"
            titulo={vipPage.titulo_BANOS}
            descripcion={vipPage.descripcion_BANOS}
            galeria={vipPage.galeria_BANOS}
            imagen="/assets/vip/rosa.png"
          />

          {/* ZONA DE DESCANSO */}
          <Beneficio
            beneficioClass="beneficio_zona_descanso"
            titulo={vipPage.titulo_ZONA_DE_DESCANSO}
            descripcion={vipPage.descripcion_ZONA_DE_DESCANSO}
            galeria={vipPage.galeria_ZONA_DE_DESCANSO}
            imagen="/assets/vip/plantarosada.png"
          />

          {/* RESTAURANTE */}
          <Beneficio
            beneficioClass="beneficio_restaurante"
            titulo={vipPage.titulo_RESTAURANTE}
            descripcion={vipPage.descripcion_RESTAURANTE}
            galeria={vipPage.galeria_RESTAURANTE}
            imagen="/assets/vip/planta_verde.png"
          />

          {/* FOSO */}
          <Beneficio
            beneficioClass="beneficio_restaurante"
            titulo={vipPage.titulo_FOSO}
            descripcion={vipPage.descripcion_FOSO}
            galeria={vipPage.galeria_FOSO}
            imagen="/assets/vip/flor_moradaconrojo.png"
          />
          <Entradas />
          <GaleriaFinal galeria={vipPage.galeria_FINAL} />
        </>
      )}
    </div>
  );
};
