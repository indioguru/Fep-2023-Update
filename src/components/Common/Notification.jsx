import { useFetch } from "../hooks/useFetch";

export const Notification = () => {
  const onClose = () => {
    document.querySelector(".notification").classList.add("hideNotification");
  };

  const { data } = useFetch("/notificacion", {});

  if (!data.activado) {
    return null;
  }

  return (
    <>
      {Object.keys(data).length !== 0 && (
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
            <p>
              <strong>{data.titulo}</strong>
            </p>
            <p>{data.descripcion}</p>
          </div>

          <div className="boton_contain">
            <a
              href={data.url_boton}
              target="_blank"
              className="boton Suscribirse home"
            >
              {data.texto_boton}
            </a>

            {/* <img
              className="logo_vassar"
              src="/assets/notification/logo_vassar.png"
              alt="logo_vassar"
            /> */}
          </div>
        </div>
      )}
    </>
  );
};
