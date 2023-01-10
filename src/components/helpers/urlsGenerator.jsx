export const urlsGenerator = (arr) => {
  const artistasWidthUrl = arr.map((artista) => {
    const url = artista.nombre.split(" ").join("-").toLowerCase();

    return {
      ...artista,
      url: url,
    };
  });

  return artistasWidthUrl;
};

export const urlGenerator = (artista) => {
  const url = artista.nombre.split(" ").join("-").toLowerCase();
  return url;
};
