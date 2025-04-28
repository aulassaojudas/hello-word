import "./Aside.css";
export const Aside = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li>
                        <a className="sidebar-link" href="#dashboard">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a className="sidebar-link" href="#perfil">
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a className="sidebar-link" href="#config">
                            <span>Configurações</span>
                        </a>
                    </li>
                    <li>
                        <a className="sidebar-link" href="#sair">
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
