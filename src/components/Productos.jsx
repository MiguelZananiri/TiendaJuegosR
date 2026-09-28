import { useState, useEffect } from 'react';
import "./Productos.css";
import Descripcion from './Descripcion';

function Productos({ juegos, setJuegos, carrito, setCarrito }) {
    const [descHover, setDescHover] = useState(null);
    const [estaCargado, setEstaCargado] = useState();
    const [busqueda, setBusqueda] = useState([]);

    const agregarCarrito = (juego) => {
        const existe = carrito.some(
            producto => producto.id === juego.id
        )

        if (existe) {
            alert("El juego ya se encuentra en el carrito");
            return;
        }

        const memoriaCarrito = [...carrito, juego.id];

        setCarrito(memoriaCarrito);

        localStorage.setItem("carrito", JSON.stringify(memoriaCarrito));

        alert("El juego " + juego.titulo + " ha sido agregado");
    }

    const buscarJuegos = () => {
        event.preventDefault();

        const busqueda = document
            .querySelector("#input-buscar")
            .value
            .toLowerCase();

        const tarjetas = document.querySelectorAll(".game-card");

        tarjetas.forEach(tarjeta => {
            const titulo = tarjeta
                .querySelector(".titulo-juego")
                .textContent
                .toLowerCase();

            if (titulo.includes(busqueda)) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }

            setBusqueda(busqueda);
        });
    }

    useEffect(() => {
        const obtenerJuegos = async () => {
            try {
                const response = await fetch("/juegos.json");
                const data = await response.json();

                setJuegos(data);
                setEstaCargado(true);
            } catch (error) {
                console.log(error);
                setEstaCargado(false);
            }
        };

        obtenerJuegos();
    }, []);

    return (
        <div id="productos">
            <form id="buscador" onSubmit={buscarJuegos}>
                <input type="text" placeholder="Buscar juego" id="input-buscar" autoComplete="off" />
                <input type="submit" value="Buscar" id="boton-buscar" />
            </form>
            <h2>Videojuegos en venta</h2>
            <h3>Ofertas navideñas</h3>
            <div id="juegos"></div>
            <div className='game-cards'>
                {!estaCargado ? (
                    <h1>Error al cargar los juegos</h1>
                ) : (
                    juegos.map((juego) => (
                        <div
                            className='game-card'
                            key={juego.id}
                            onMouseEnter={() => setDescHover(juego.id)}
                            onMouseLeave={() => setDescHover(null)}
                        >
                            <img src={juego.imagen} alt={juego.titulo} />
                            <p className='titulo-juego'>{juego.titulo}</p>
                            <p>CLP$ {juego.oferta.toLocaleString("es-CL")}</p>
                            <a className='boton' href={juego.url}>Ir al sitio del juego</a>

                            <button
                                className='boton'
                                onClick={() => agregarCarrito(juego)}>Agregar al carrito
                            </button>

                            {descHover === juego.id && (
                                <Descripcion descripcion={juego.descripcion} />
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>

    );
}

export default Productos