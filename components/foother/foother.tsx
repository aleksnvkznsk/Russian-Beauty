import "./foother.scss"

interface FooterProps {
    columns: {
        title: string;
        links: { text: string; href: string }[];
    }[];
    footerText: string;
}

const Footer: React.FC<FooterProps> = ({ columns, footerText, }) => {
    return (
        <footer className="footer">
            <div className="logo-container">Russian Beauty</div>
            <div className="columns-container">
                {columns.map((column, index) => (
                    <div key={index} className="column">
                        <h3>{column.title}</h3>
                        <ul>
                            {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="bottom-container"><p className="footer-text">{footerText}</p></div>
        </footer>
    );
};

export default Footer;