import { useEffect, useRef, useState } from "react";
import "./Descripcion.css";

function Descripcion ({ descripcion }) {
    const descripcionRef = useRef(null);
    const [toLeft, setToLeft] = useState(false);

    useEffect(() => {
        const elemento = descripcionRef.current;

        if (elemento) {
            const rect = elemento.getBoundingClientRect();

            if (rect.right > window.innerWidth) {
                setToLeft(true);
            }
        }
        });

    return (
        <p
            ref={descripcionRef}
            className={`descripcion-juego ${toLeft ? "left" : ""}`}
        >
            {descripcion}
        </p>
    );
}

export default Descripcion