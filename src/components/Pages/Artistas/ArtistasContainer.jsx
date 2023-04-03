import { Artista } from "../../Common/Artista";

export const ArtistasContainer = ({ artistasSort }) => {
  return (
    <div className="page-artistas_artistas artistasContainerAnimation">
      {artistasSort.map((artista) => (
        <Artista marco="/assets/anim_steps/5.png" artista={artista} />
      ))}
    </div>
  );
};
