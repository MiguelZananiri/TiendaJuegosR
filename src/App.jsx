import { useState } from "react";
import Header from "./components/Header";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
import "./App.css"

function App() {

    const [juegos, setJuegos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    return (
        <>
            <Header 
            carrito={carrito}
            setCarrito={setCarrito}
            juegos={juegos} 
            />
            <Productos
                juegos={juegos}
                setJuegos={setJuegos}  
                carrito={carrito}
                setCarrito={setCarrito}
            />
            <Footer />
        </>
    )
}

export default App