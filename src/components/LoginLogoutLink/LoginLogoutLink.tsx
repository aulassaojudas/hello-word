import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

interface LoginLogoutLinkProps {
    className: string;
}

export const LoginLogoutLink = ({ className }: LoginLogoutLinkProps) => {
    const { logout, username } = useUser();
    const navigate = useNavigate();

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        logout();
        navigate("/");
    };

    const linkProps = username
        ? { to: "/", onClick: handleLogout, label: "Logout" }
        : { to: "/login", onClick: undefined, label: "Login" };

    return (
        <Link
            className={className}
            to={linkProps.to}
            onClick={linkProps.onClick}>
            <span>
                {linkProps.label}
            </span>
        </Link>
    );
};
