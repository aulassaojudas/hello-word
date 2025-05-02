import { Link } from "react-router-dom";
import { LoginLogoutLink } from "../LoginLogoutLink/LoginLogoutLink";
import "./Aside.css";
export const Aside = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li>
                        <LoginLogoutLink className="sidebar-link" />
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/indicador">
                            <span>Indicador</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/dashboard">
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/profile">
                            <span>Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/settings">
                            <span>Configurações</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
