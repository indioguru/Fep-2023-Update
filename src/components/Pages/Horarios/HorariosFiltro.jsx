import { filterActive } from "../../helpers/filterActive";

export const HorariosFiltro = ({ setCurrentSlideSlider }) => {
  return (
    <div className="horarios_page_filtro">
      <div className="filtros">
        <div
          onClick={() => {
            setCurrentSlideSlider(1);
            filterActive("filtro_item_1");
          }}
          className="filtro_item filtro_item_1 filtro_item_active"
        >
          <span>JUEVES</span>
          23 de marzo 2023
        </div>
        <div
          onClick={() => {
            setCurrentSlideSlider(2);
            filterActive("filtro_item_2");
          }}
          className="filtro_item filtro_item_2"
        >
          <span>VIERNES</span>
          24 de marzo 2023
        </div>
        <div
          onClick={() => {
            setCurrentSlideSlider(3);
            filterActive("filtro_item_3");
          }}
          className="filtro_item filtro_item_3"
        >
          <span>SÁBADO</span>
          25 de marzo 2023
        </div>
        <div
          onClick={() => {
            setCurrentSlideSlider(4);
            filterActive("filtro_item_4");
          }}
          className="filtro_item filtro_item_4"
        >
          <span>DOMINGO</span>
          26 de marzo 2023
        </div>
      </div>
    </div>
  );
};
