import './Footer.css';
import facebook from '../assets/img/facebook-logo.png';
import x from '../assets/img/x-logo.png';
import youtube from '../assets/img/youtube-logo.png';

function Footer() {
    return (
        <>
            <div id="contacto">
                <p>© 2026 Legendary Games. Todos los derechos reservados.</p>
                <p>legendarygames@contact.com</p>
                <p>Teléfono: 123-456-78</p>
                <div className="redes">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="Imagen Youtube" />
                    </a>
                    <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="Imagen X" />
                    </a>
                    <a href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Imagen Facebook" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer
