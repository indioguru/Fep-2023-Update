import React, { useState } from "react";

export const Notification = () => {
  const [show, setShow] = useState(true);
  const onClose = () => {
    document.querySelector(".notification").classList.add("hideNotification");

    setTimeout(() => {
        setShow(false)
    }, 1000);
  };

  return (
    <>
      {setShow && (
        <div className="notification">
          <div className="close" onClick={onClose}>
            X
          </div>
          <img
            className="notiplantas"
            src="/assets/notification/notiplantas.png"
            alt="notiplantas"
          />

          <div className="info">
            {/* <p>Titulo</p> */}
            <p>
              ¡Haz parte de nuestro festival! Si eres emprendedor, suscríbete
              aquí y sé parte del FEP2023.
            </p>
          </div>

          <div className="boton_contain">
            <a
              href="https://forms.gle/vJEBwy9UiP5qDWn38"
              target="_blank"
              className="boton"
            >
              SUSCRIBIRSE
            </a>

            <img
              className="logo_vassar"
              src="/assets/notification/logo_vassar.png"
              alt="logo_vassar"
            />
          </div>
        </div>
      )}
    </>
  );
};
