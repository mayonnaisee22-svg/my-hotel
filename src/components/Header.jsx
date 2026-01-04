import { NavLink } from "react-router-dom";
import { site } from "../data/site.js";

function linkStyle({ isActive }) {
    return {
        textDecoration: "none",
        fontWeight: isActive ? 700 : 500,
        opacity: isActive ? 1 : 0.8,
    };
}

export default function Header() {
    return (
        <header className="header">
            <div className="container headerRow">
                <div className="brand">
                    <span className="brandName">{site.hotelName}</span>
                </div>

                <nav className="nav">
                    <NavLink to="/" style={linkStyle}>
                        Главная
                    </NavLink>

                    <NavLink to="/rooms" style={linkStyle}>
                        Номера
                    </NavLink>

                    <NavLink to="/contacts" style={linkStyle}>
                        Контакты
                    </NavLink>
                    <NavLink to="/booking" style={linkStyle}>
                        Бронирование
                    </NavLink>

                </nav>

                <a className="phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                    {site.phone}
                </a>
            </div>
        </header>
    );
}
