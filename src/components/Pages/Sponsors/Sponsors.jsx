import { useEffect } from "react";
import { Loader } from "../../Common/Loader";
import { scrollElement } from "../../helpers/ScrollAnimations";
import { useFetch } from "../../hooks/useFetch";
import { SponsorsBanner } from "./SponsorsBanner";
import { SponsorsItem } from "./SponsorsItem";

export const Sponsors = () => {
  const { data: p_sponsors, isLoading } = useFetch("/pagina-de-sponsors", {});

  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector("body");
      body.style.overflowY = "hidden";
      body.style.overflowY = "scroll";
    }, 500);

    window.addEventListener("scroll", function () {
      scrollElement("card", "anim_card_view");
    });
  }, []);

  return (
    <div className="sponsors">
      {isLoading && <Loader />}

      <div className="sponsors_container">
        <SponsorsBanner {...p_sponsors} isLoading={isLoading} />

        {!isLoading && (
          <div className="content_cards">
            {p_sponsors.sponsors.map((item, i) => (
              <SponsorsItem {...item} i={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
