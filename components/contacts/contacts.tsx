// components/Contacts.tsx
import React from 'react';
import './contacts.scss';

interface ContactItem {
    text: string;
    href?: string;
}

const Contacts: React.FC = () => {
    const contactItems: ContactItem[] = [
        {
            text: 'mail@gmail.com',
            href: 'mailto:mail@gmail.com',
        },
        {
            text: '+7 999 888 77 66',
            href: 'tel:+15551234567',
        },
        {
            text: 'Автогенная, Новосибирск',
        },
    ];

    return (
        <div className="contacts">
            <h2 className="contacts__title">Контакты</h2>
            <div className="contacts__list">
                {contactItems.map((item, index) => (
                    <div key={index} className="contacts__item">
                        {item.href ? (
                            <a href={item.href} className="contacts__link">
                                {item.text}
                            </a>
                        ) : (
                            <span className="contacts__text">{item.text}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts;