export const filtrar = (item, setArtistasFilter, artistas) => {
    const artistasContainer = document.querySelector(".page-artistas_artistas");
    artistasContainer.classList.remove("artistasContainerAnimation");
    setTimeout(() => {
      artistasContainer.classList.add("artistasContainerAnimation");
    }, 100);

    if (item.toLowerCase() === "todos") {
      setArtistasFilter([]);
    } else {
      const newArtists = artistas.filter((el) =>
        el.fecha.toLowerCase().includes(item.toLowerCase())
      );
      setArtistasFilter(newArtists);
    }
  };