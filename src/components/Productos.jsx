import { useState, useEffect } from 'react';
import { Modal as BootstrapModal } from "bootstrap";
import "./Productos.css";
import Descripcion from './Descripcion';
import ModalMensaje from './ModalMensaje';

// Componente Productos
function Productos({ juegos, setJuegos, carrito, setCarrito }) {
    const [descHover, setDescHover] = useState(null);
    const [cargandoAnim, setCargandoAnim] = useState("");
    const [estaCargado, setEstaCargado] = useState(null);
    const [busqueda, setBusqueda] = useState("");
    const [busquedaRealizada, setBusquedaRealizada] = useState("");
    const [mensaje, setMensaje] = useState("");

    // Dar mensaje
    const mostrarMensaje = (texto) => {
        setMensaje(texto);
    }

    // Mostrar mensaje al no tener URL
    const sinUrl = (juego) => {
        mostrarMensaje("El juego " + juego.titulo + " no tiene una URL");
    }

    // Agregar juego al carrito
    const agregarCarrito = (juego) => {
        const existe = carrito.includes(juego.id);

        if (existe) {
            mostrarMensaje("El juego " + juego.titulo + " ya se encuentra en el carrito");
            return;
        }

        const memoriaCarrito = [...carrito, juego.id];

        setCarrito(memoriaCarrito);

        localStorage.setItem("carrito", JSON.stringify(memoriaCarrito));

        mostrarMensaje("El juego " + juego.titulo + " ha sido agregado al carrito");
    }

    // Buscar juegos
    const buscarJuegos = (e) => {
        e.preventDefault();

        setBusquedaRealizada(busqueda);
    }

    // Filtrar juegos que coincidan con la busqueda
    const juegosFiltrados = juegos.filter((juego) =>
        juego.titulo.toLowerCase().includes(busquedaRealizada.toLowerCase())
    );

    // Verificar si un juego se encuentra en el carrito
    const juegoEnCarrito = (juego) => 
        carrito.includes(juego.id);

    // Mostrar modal con el mensaje
    useEffect(() => {
        if (!mensaje) return;

        const modalElement = document.getElementById("modal-mensaje");
        const modal = BootstrapModal.getOrCreateInstance(modalElement);
        modal.show();
    }, [mensaje]);

    // Animacion de cargando
    useEffect(() => {
        if (estaCargado !== null) return;

        const cargando = setInterval(() => {
            setCargandoAnim((puntos) => {
                if (puntos.length >= 3) return "";
                return puntos + ".";
            });
        }, 100);

        return () => clearInterval(cargando);
    }, [estaCargado]);

    // Cargar juegos a traves de un archivo JSON
    useEffect(() => {
        const obtenerJuegos = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const response = await fetch(`${import.meta.env.BASE_URL}juegos.json`);
                const data = await response.json();

                setJuegos(data);
                setEstaCargado(true);
            } catch (error) {
                setEstaCargado(false);
            }
        };

        obtenerJuegos();
    }, []);

    return (
        <>
            <div id="productos">
                <form id="buscador" onSubmit={buscarJuegos}>
                    <input type="text" placeholder="Buscar juego" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} id="input-buscar" autoComplete="off" />
                    <input type="submit" value="Buscar" id="boton-buscar" />
                </form>
                <h2>Videojuegos en venta</h2>
                <h3>Ofertas navideñas</h3>
                <div ></div>
                <div className='game-cards'>
                    {estaCargado === null ? (
                        <h1>Cargando juegos{cargandoAnim}</h1>
                    ) :
                    estaCargado === false ? (
                    <h1>Error al cargar los juegos</h1>
                    ) : (
                        juegosFiltrados.map((juego) => (
                    <div
                        className='game-card'
                        key={juego.id}
                        onMouseEnter={() => setDescHover(juego.id)}
                        onMouseLeave={() => setDescHover(null)}
                    >
                        <img src={juego.imagen} alt={juego.titulo} />
                        <p className='titulo-juego'>{juego.titulo}</p>
                        <s>CLP$ {juego.precio.toLocaleString("es-CL")}</s>
                        <h5>CLP$ {juego.oferta.toLocaleString("es-CL")}</h5 >
                        {!juego.url? (
                            <button className='boton' onClick={() => sinUrl(juego)} data-bs-toggle="modal" data-bs-target="#modal-mensaje">Sin URL</button>
                        ) : (
                            <a className='boton' href={juego.url} target="_blank" rel="noopener noreferrer">Ir al sitio del juego</a>
                        )}
                        
                        {juegoEnCarrito(juego) ? (
                            <button 
                                className='boton' 
                                id='en-carrito'
                                onClick={() => agregarCarrito(juego)}>En el carrito
                            </button>
                        ) : (
                            <button
                                className='boton'
                                onClick={() => agregarCarrito(juego)}>Agregar al carrito
                            </button>
                        )}

                        {descHover === juego.id && (
                            <Descripcion descripcion={juego.descripcion} />
                        )}

                    </div>
                    ))
                    )}
                </div>
            </div>

            <ModalMensaje mensaje={mensaje} />
        </>
    );
}

export default Productos