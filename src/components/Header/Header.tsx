// components/Header.tsx

import { Logo } from "../Logo/Logo";
import "./Header.css";
export const Header = ()=> {
  return (
    <header className="header">
      <div className="logo-fixed">
        <Logo />
      </div>
      <div className="header-center">
        <h1 className="header-title">Livro Caixa</h1>
      </div>
    </header>
  );
}

