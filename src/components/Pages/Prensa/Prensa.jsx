import React from "react";
// import Media from "react-media";
export const Prensa = () => {
  return (
    <div className="prensa ">
      <div className="prensa_container ">
        <div className="flex_item_one">
          <div className="logo">
            <img src="/assets/etapa4/logodesktop.png" alt="logo" />
          </div>

          <div className="title">
            <h1>Prensa</h1>
          </div>

          <div className="content_banner">
            <img className="sol" src="/assets/etapa4/sol.png" alt="" />
            <img
              className="titan"
              src="/assets/etapa5/newsletter/img_formulario.png"
              alt=""
            />
            <div className="suelo"></div>
          </div>
        </div>

        <div className="flex_item_two">
          <div className="content_info">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. <br /> <br /> Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. <br /> <br /> dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. <br /> <br /> Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. voluptua. <br /> <br /> Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. voluptua. <br /> <br /> Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>

        {/* <Media query="(max-width: 760px)">
          {(resolution) => {
            return resolution ? (
              <div className="logo">
                <img src="/assets/etapa4/logomovil.png" alt="logo" />
              </div>
            ) : (
              <div className="logo">
                <img src="/assets/etapa4/logomovil.png" alt="logo" />
              </div>
            );
          }}
        </Media> */}
      </div>
    </div>
  );
};
