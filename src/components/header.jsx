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
                        <img src="/logo.svg" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">Carrito</Link> 
                    </li>
                  
                </ul>
            </nav>
        </header>
    );
};
