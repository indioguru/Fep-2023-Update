import Media from "react-media";
import { useFetch } from "../hooks/useFetch";

export const FooterLogos = () => {
  const { data, isLoading } = useFetch("/footer", {});

  return (
    <>
      {!isLoading && (
        <Media query="(max-width: 999px)">
          {(resolution) => {
            return resolution ? (
              <img src={data.logo_movil.url} alt="logosmovil" />
            ) : (
              <img src={data.logo_desktop.url} alt="logoswebfep" />
            );
          }}
        </Media>
      )}
    </>
  );
};
