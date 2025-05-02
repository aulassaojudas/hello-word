import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import "./Nav.css";
export const Nav = () => {
    const { username } = useUser();
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li>
                    <Link className="nav-link" to="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/sobre">
                        <span>Sobre</span>
                    </Link>
                </li>
            </ul>
            {username &&
                <div className="user-display">Bem-vindo, {username}!</div>
            }
        </nav>
    );
};

