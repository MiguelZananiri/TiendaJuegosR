import './Header.css'
import Carrito from './Carrito';

function Header({carrito, setCarrito, juegos}) {
  return <>
    <div className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Legendary Games</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
                <Carrito 
                  carrito={carrito}
                  setCarrito={setCarrito}
                  juegos={juegos}
                />
            </div>
        </div>
    </div>

    <div id="inicio">
      <h1 className="header-text">Legendary Games</h1>
      <p className="header-text">Tienda para comprar videojuegos en linea para PC</p>
    </div>

    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/4c8d7ce5142a528bdac68c093bd1bcc720e2baee/capsule_616x353_2x.jpg?t=1781187782"
              className="d-block mx-auto img-fluid" alt="Imagen GTA V" />
          </div>
          <div className="carousel-item">
            <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3595270/862980706af9711b9c79ba4be6cb551d72f343a5/capsule_616x353_2x.jpg?t=1778886604"
              className="d-block mx-auto img-fluid" alt="Imagen COD Modern Warfare III" />
          </div>
          <div className="carousel-item">
            <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/f5a2d38e26fd1633b20debdb4dc121592d2faffd/capsule_616x353_spanish_2x.jpg?t=1788431424"
              className="d-block mx-auto img-fluid" alt="Imagen Helldivers" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </>
}

export default Header
