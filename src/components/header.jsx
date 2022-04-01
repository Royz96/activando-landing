export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container intro-container">
            <div className="row">
              <div className="col-lg-4 col-lg-offset-8 intro-text">
                <h1 style={{ fontWeight: "lighter" }}>ASISTENCIA DE</h1>{" "}
                <h1 style={{ color: "#0772df" }}>PRIMER NIVEL</h1>
                <h1 style={{ color: "#646464" }}>A TU ALCANCE</h1>
                <p>{props.data ? props.data.paragraph : "Cargando"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Ver Más
                </a>{" "}
                <div className="card" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-blue"></div>
      </div>
    </header>
  );
};
