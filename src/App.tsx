import { NavLink, Route, Routes } from "react-router-dom";

import { Gallery } from "./pages/Gallery/Gallery";
import { Home } from "./pages/Home/Home";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav__link nav__link--active" : "nav__link";

export const App = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">Prompt AI Gambar</div>
        <nav className="nav">
          <NavLink className={getNavLinkClass} to="/">
            Beranda
          </NavLink>
          <NavLink className={getNavLinkClass} to="/gallery">
            Gallery
          </NavLink>
        </nav>
      </header>

      <main className="page-container">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Gallery />} path="/gallery" />
        </Routes>
      </main>
    </div>
  );
};
