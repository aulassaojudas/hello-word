import "./Nav.css";
export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li>
                    <a className="nav-link" href="#home">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#sobre">
                        <span>Sobre</span>
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#login">
                        <span>Login</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};


