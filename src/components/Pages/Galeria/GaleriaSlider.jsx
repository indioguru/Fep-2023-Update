import React, { useEffect, useState } from "react";
import imagenes from "./Top.json";

export const GaleriaSlider = () => {
  const [imagenesSplit, setImagenesSplit] = useState([]);

  useEffect(() => {
    function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
      }
      return res;
    }

    setImagenesSplit(sliceIntoChunks(imagenes, 3));
  }, [imagenes]);

  return (
    <div className="page-galeria_galeria containerAll">
      {imagenesSplit.map((img) => (
        <div className="galeria_container">
          {img.map((imagen, i) => {
            return (
              i === 0 && (
                <img src={`/assets/galeria/${imagen}`} alt="" />
              )
            );
          })}

          <div className="display-flex">
            {img.map((imagen, i) => {
              return (
                i === 1 && (
                  <img src={`/assets/galeria/${imagen}`} alt="" />
                )
              );
            })}
            {img.map((imagen, i) => {
              return (
                i === 2 && (
                  <img src={`/assets/galeria/${imagen}`} alt="" />
                )
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
