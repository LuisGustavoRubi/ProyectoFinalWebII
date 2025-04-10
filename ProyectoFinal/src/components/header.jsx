import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">Carrito</Link> 
                    </li>
                    <li>
                       <Link to="/store-locations">Ubicaciones</Link> {/* Nuevo enlace */}
                      </li>
                </ul>
            </nav>
        </header>
    );
};
