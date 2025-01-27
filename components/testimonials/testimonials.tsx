"use client";
import React, { useState, useRef, useEffect } from 'react';
import './testimonials.scss';

interface Testimonial {
    id: number;
    name: string;
    photo: string;
    text: string;
    company?: string;
}

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Мария',
            photo: '/doctor.jpg',
            text: 'Посещение Russian Beauty это не просто процедура, это настоящий ритуал красоты и релакса. Уютная атмосфера, вежливый персонал и профессиональные косметологи создают ощущение комфорта и заботы. Я полностью расслабилась во время сеанса и получила потрясающий результат. Обязательно вернусь снова!',
            company: '@login1'
        },
        {
            id: 2,
            name: 'Анастасия',
            photo: '/doctor.jpg',
            text: 'Недавно прошла процедуру очищения кожи в Russian Beauty и осталась очень довольна! Косметолог подробно проконсультировал меня, ответил на все вопросы и подобрал индивидуальную программу. Результат превзошел все мои ожидания! Кожа стала более гладкой, свежей и увлажненной. Спасибо за вашу работу!',
            company: '@login2'
        },
        {
            id: 3,
            name: 'Виктория',
            photo: '/doctor.jpg',
            text: 'Я уже несколько месяцев посещаю Russian Beauty и вижу потрясающие изменения! Кожа стала более здоровой, ухоженной и сияющей. Очень рада, что нашла такое замечательное место, где заботятся о моей красоте и помогают добиваться долгосрочных результатов!',
            company: '@login3'
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderTrackRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (sliderTrackRef.current && sliderTrackRef.current.children.length > 0) {
                setItemWidth(sliderTrackRef.current.children[0].clientWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (sliderTrackRef.current) {
            sliderTrackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }, [currentIndex, itemWidth]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="testimonials-container">
            <h2 className="testimonials-title">Отзывы наших клиентов</h2>
            <div className="slider-wrapper">
                <div className="slider-track" ref={sliderTrackRef} >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-item">
                            <div className="testimonial-left">
                                <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                                <div className="testimonial-name-and-company">
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                    {testimonial.company && <p className="testimonial-company">{testimonial.company}</p>}
                                </div>
                            </div>
                            <div className="testimonial-right">
                                <p className="testimonial-text">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="slider-buttons">
                <button onClick={prevSlide} className="prev-button">{'<'}</button>
                <button onClick={nextSlide} className="next-button">{'>'}</button>
            </div>
            <a href="https://2gis.ru/novosibirsk/firm/70000001028005800/tab/reviews" target="_blank" className="testimonial-link-below">Смотреть все отзывы</a>
        </div>
    );
};

export default Testimonials;