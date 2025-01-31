import Footer from "./foother";

const FootherClient = () => {
    const columns = [
        {
            title: '',
            links: [
                { text: 'ООО « Russian Beauty»© Косметологическая клиника Russian Beauty. Все права защищены.', href: '#' },
                { text: 'Мед. лицензия: ', href: '#' },
                { text: 'Политика Конфиденциальности', href: '#' },
                { text: 'Публичная информация', href: '#' },
            ],
        },
        {
            title: 'Время работы:',
            links: [
                { text: 'пн-вс: 10.00—22.00', href: '#' },
            ],
        },
        {
            title: 'Адрес:',
            links: [
                { text: 'Автогенная ул., 69, Новосибирск', href: '#' },
            ],
        },
        {
            title: 'Для связи:',
            links: [
                { text: '+7 999 888 77 66', href: '#' },
                { text: 'Whatsapp', href: '#' },
                { text: 'Telegram', href: '#' },
            ],
        },
    ];
    const footerText = 'Все материалы и цены, размещенные на сайте, носят справочный характер и не являются публичной офертой, определяемой положением Статьи 437(2) Гражданского кодекса Российской Федерации.';



    return (
        <Footer
            columns={columns}
            footerText={footerText}
        />
    );
};

export default FootherClient;