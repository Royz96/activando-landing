export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          {/* <p>Conoce nuetsros productos y servicios</p> */}
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-1">
            {" "}
            <div className="service-img-border">
              <img
                src={
                  "https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg"
                }
                className="service-images"
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1" style={{ marginTop: 50 }}>
            {" "}
            <h2 style={{ textAlign: "left" }}>Tienda en línea</h2>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam sedasd commodo nibh ante facilisis
              bibendum dolor feugiat at.
            </p>
            <a
              style={{ float: "left", marginTop: 10 }}
              href="#features"
              className="btn btn-custom btn-lg page-scroll"
            >
              Ver Más
            </a>
          </div>
        </div>
        <div className="service-divider" />
        <div className="row">
          <div className="col-md-6" style={{ marginTop: 50 }}>
            {" "}
            <h2 style={{ textAlign: "right" }}>Crédito de nómina</h2>
            <p style={{ textAlign: "right" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam sedasd commodo nibh ante facilisis
              bibendum dolor feugiat at.
            </p>
            <a
              style={{ float: "right", marginTop: 10 }}
              href="#features"
              className="btn btn-custom btn-lg page-scroll"
            >
              Ver Más
            </a>
          </div>
          <div className="col-md-4 col-md-offset-1">
            {" "}
            <div className="service-img-border">
              <img
                src={
                  "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className="service-images"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
