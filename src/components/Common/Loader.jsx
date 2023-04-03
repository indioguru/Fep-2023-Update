export const Loader = () => {
  const idioma = localStorage.getItem("idioma");
  return (
    <div className="loader">
      <h2>
        {idioma === "ESP" ? (
          <>
            <span>C</span>
            <span> A</span>
            <span> R</span>
            <span> G</span>
            <span> A</span>
            <span> N</span>
            <span> D</span>
            <span> O</span>
          </>
        ) : (
          <>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </>
        )}
      </h2>
    </div>
  );
};
