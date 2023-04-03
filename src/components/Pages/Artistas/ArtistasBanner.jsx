
export const ArtistasBanner = ({Link, idioma}) => {
  return (
    <div className="page-artistas_banner">
    <Link to="/">
      <img
        className="logo"
        src="/assets/etapa4/logodesktop.png"
        alt="logodesktop"
      />
    </Link>

    <h1>{idioma === "ESP" ? <>Artistas</> : <>Artists</>}</h1>
    <img
      className="montains"
      src="/assets/etapa5/artistas/moontanasin.png"
      alt="banner-img"
    />
    <img
      className="flor"
      src="/assets/etapa5/artistas/flor_artista.png"
      alt="banner-img"
    />

    {/* <div className="artistas"></div> */}
    <img
      className="artistas"
      src="/assets/etapa5/artistas/artistas.png"
      alt="banner-img"
    />
  </div>

  )
}
