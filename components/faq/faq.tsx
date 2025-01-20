"use client"
import React, { useState, useRef, useEffect } from 'react';
import './faq.scss';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ = () => {
    const faqData: FAQItem[] = [
        {
            id: 1,
            question: 'Какие услуги вы предоставляете?',
            answer:
                'Мы предлагаем широкий спектр косметологических услуг, включая чистку лица, пилинги, инъекции и многое другое.',
        },
        {
            id: 2,
            question: 'Как записаться на прием?',
            answer:
                'Вы можете записаться на прием, позвонив нам по телефону, или через форму на нашем сайте.',
        },
        {
            id: 3,
            question: 'Какие гарантии качества вы предоставляете?',
            answer:
                'Мы гарантируем высокое качество всех наших услуг и используем только сертифицированные препараты.',
        },
        {
            id: 4,
            question: 'Сколько стоят ваши услуги?',
            answer:
                'Стоимость наших услуг зависит от выбранной процедуры. Вы можете ознакомиться с прайсом на нашем сайте или узнать по телефону.',
        },
        {
            id: 5,
            question: 'У вас есть рассрочка?',
            answer:
                'Да, есть. Мы можем предложить вам удобную рассрочку для оплаты наших услуг.',
        },
        {
            id: 6,
            question: 'Как часто нужно посещать косметолога?',
            answer:
                'Регулярность посещений зависит от ваших индивидуальных потребностей и процедур. Врач-косметолог поможет вам подобрать оптимальную программу.',
        },
        {
            id: 7,
            question: 'Используете ли вы анестезию при инъекционных процедурах?',
            answer:
                'Да, при необходимости мы используем анестезирующие средства для обеспечения максимального комфорта наших пациентов.',
        },
        {
            id: 8,
            question: 'У вас есть подарочные сертификаты?',
            answer:
                'Да, у нас вы можете приобрести подарочные сертификаты на любые услуги. Это будет прекрасный подарок для ваших близких.',
        },
    ];

    const [openItemId, setOpenItemId] = useState<number | null>(null);
    const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const toggleAnswer = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    useEffect(() => {
        faqData.forEach((item) => {
            const ref = answerRefs.current[item.id];
            if (ref) {
                ref.style.height = openItemId === item.id ? `${ref.scrollHeight}px` : '0px';
                ref.style.paddingTop = openItemId === item.id ? '0.5rem' : '0px';
                ref.style.paddingBottom = openItemId === item.id ? '0.5rem' : '0px';
            }
        });
    }, [openItemId, faqData]);

    const setRef = (id: number) => (el: HTMLDivElement | null) => {
        answerRefs.current[id] = el;
    };

    return (
        <div className="faq-component">
            <h2 className="faq-title">Часто Задаваемые Вопросы</h2>
            <ul className="faq-list">
                {faqData.map((item) => (
                    <li key={item.id} className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(item.id)}>
                            {item.question}
                            <span className={`faq-icon ${openItemId === item.id ? 'faq-icon-open' : ''}`}>
                                {openItemId === item.id ? '−' : '+'}
                            </span>
                        </div>
                        <div
                            className="faq-answer"
                            ref={setRef(item.id)}
                            style={{ overflow: 'hidden', paddingTop: 0, paddingBottom: 0 }}
                        >
                            {item.answer}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;