import Link from "next/link";
import "./header.scss";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const servicesRef = useRef<HTMLLIElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);
    const navLinks = [
        { href: "/", label: "Главная" },
        {
            href: "", label: "Услуги",
            submenu: [
                { href: "/service1", label: "Инъекционная косметология" },
                { href: "/service2", label: "Аппаратная косметология" },
                { href: "/service3", label: "Эстетическая косметология" },
            ]
        },
        { href: "/price", label: "Прайс" },
        { href: "/doctors", label: "Врачи" },
        { href: "/about", label: "О нас" },
        { href: "/contacts", label: "Контакты" },
    ];

    const handleServicesClick = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (servicesRef.current && !servicesRef.current.contains(event.target as Node) && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsServicesDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    return (
        <header className="header">
            <p className="header__logo">Russian Beauty</p>
            <div className="header__nav-container">
                <button className="header__burger" onClick={toggleMenu}>☰</button>
                <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
                    <div className="header__nav-content">
                        <button className="header__nav-close" onClick={toggleMenu}>X</button>
                        <ul className="header__links">
                            {navLinks.map((link, index) => (
                                <li key={index}
                                    className="header__links__item"
                                    ref={link.label === 'Услуги' ? servicesRef : null}
                                    onClick={link.label === 'Услуги' ? handleServicesClick : undefined}>
                                    <Link
                                        href={link.href}
                                        className="header__links__link"
                                        onClick={() => {
                                            if (link.label !== 'Услуги') {
                                                toggleMenu();
                                            }
                                        }}>
                                        {link.label}

                                    </Link>
                                    {link.label === "Услуги" && (
                                        <ul className={`header__dropdown ${isServicesDropdownOpen ? 'header__dropdown--open' : ''}`}
                                            ref={dropdownRef}>
                                            {link.submenu?.map((subLink, subIndex) => (
                                                <li key={subIndex} className="header__dropdown__item">
                                                    <Link href={subLink.href} className="header__dropdown__link" onClick={() => {
                                                        toggleMenu();
                                                        setIsServicesDropdownOpen(false)
                                                    }}>{subLink.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
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