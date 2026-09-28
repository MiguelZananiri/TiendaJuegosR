import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Carrito.css"

function Carrito({ carrito, setCarrito, juegos }) {
    const [carritoVisible, setCarritoVisible] = useState(false);
    const hayProductos = carrito.length > 0;

    const productosCarrito = juegos.filter(
        juego => carrito.includes(juego.id)
    );

    const removerCarrito = (id) => {
        console.log("ID a eliminar:", id, typeof id);
        console.log("Carrito antes:", carrito);

        const actializarCarrito = carrito.filter(juego => Number(juego) !== Number(id));

        console.log("Carrito después:", actializarCarrito);

        setCarrito(actializarCarrito);

        localStorage.setItem("carrito", JSON.stringify(actializarCarrito));
    };

    const limpiarCarrito = () => {
        setCarrito([]); // Limpiar el carrito en el estado
        localStorage.removeItem("carrito"); // Eliminar el carrito del almacenamiento local
    };

    return (
        <div>
            <button
                className="boton-carrito"
                id="ver-carrito"
                onClick={() => setCarritoVisible(!carritoVisible)}
            >
                <FaShoppingCart />
                <span>{carrito.length}</span>
            </button>
            {carritoVisible && (
                <div className="carrito">
                    <h2>Mi carrito</h2>
                    {!hayProductos ? (
                        <h5>El carrito esta vacio</h5>
                    ) : (
                        <>
                            <table>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Oferta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosCarrito.map((juego) => (
                                <tr key={juego.id}>
                                    <td>{juego.titulo}</td>
                                    <td>CLP$ {juego.precio.toLocaleString("es-CL")}</td>
                                    <td>CLP$ {juego.oferta.toLocaleString("es-CL")}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => removerCarrito(juego.id)}>Remover</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                            </table>
                            <p>Total: CLP$ {productosCarrito.reduce((total, juego) => total + juego.oferta, 0).toLocaleString("es-CL")}</p>
                            <button className="btn btn-danger btn-sm" onClick={limpiarCarrito}>Limpiar Carrito</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Carrito

