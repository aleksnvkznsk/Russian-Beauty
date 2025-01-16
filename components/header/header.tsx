import Link from "next/link";
import "./header.scss";

const Header = () => {
    const navLinks = [
        { href: "/", label: "Главная" },
        { href: "/services", label: "Услуги" },
        { href: "/price", label: "Прайс" },
        { href: "/doctors", label: "Врачи" },
        { href: "/about", label: "О нас" },
        { href: "/contacts", label: "Контакты" },
    ];

    return (
        <header className="header">
            <p className="header__logo">Russian Beauty</p>
            <nav className="header__nav">
                <ul className="header__links">
                    {navLinks.map((link, index) => (
                        <li key={index} className="header__links__item">
                            <Link href={link.href} className="header__links__link">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <p className="header__phone">+7 999 888 77 66</p>
        </header>
    );
};

export default Header;