"use client"
import Link from "next/link";
import "./header.scss";
import { useState } from "react";

const Header = () => {
    const navLinks = [
        { href: "/", label: "Главная" },
        { href: "/services", label: "Услуги" },
        { href: "/price", label: "Прайс" },
        { href: "/doctors", label: "Врачи" },
        { href: "/about", label: "О нас" },
        { href: "/contacts", label: "Контакты" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <p className="header__logo">Russian Beauty</p>
            <div className="header__nav-container">
                <button className="header__burger" onClick={toggleMenu}>☰</button>
                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <div className="header__nav-content">
                        <button className="header__nav-close" onClick={toggleMenu}>X</button>
                        <ul className="header__links">
                            {navLinks.map((link, index) => (
                                <li key={index} className="header__links__item">
                                    <Link href={link.href} className="header__links__link" onClick={toggleMenu}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <p className="header__phone">+7 999 888 77 66</p>
        </header>
    );
};

export default Header;