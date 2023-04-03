import { Loader } from "../../Common/Loader";
import { useFetch } from "../../hooks/useFetch";
import { CashlessDesktop } from "./CashlessDesktop";
import { CashlessMovil } from "./CashlessMovil";

export const Cashless = ({idioma}) => {
  const { data: cashlessPage, isLoading } = useFetch("/pagina-de-cashless", {});

  return (
    <div className="cashless">
      {isLoading && <Loader />}
      {Object.keys(cashlessPage).length > 0 && (
        <>
          {window.innerWidth < 999 ? (
            <CashlessMovil {...cashlessPage} idioma={idioma} />
          ) : (
            <CashlessDesktop {...cashlessPage} idioma={idioma} />
          )}
        </>
      )}
    </div>
  );
};
