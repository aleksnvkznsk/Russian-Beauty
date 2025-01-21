"use client"
import React, { useState, useRef, useEffect } from 'react';
import './testimonials.scss';

interface Testimonial {
    id: number;
    name: string;
    photo: string;
    text: string;
    company?: string;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Имя 1',
            photo: '/doctor.jpg',
            text: 'Отзыв 1.',
            company: '@login1'
        },
        {
            id: 2,
            name: 'Имя 2',
            photo: '/doctor.jpg',
            text: 'Отзыв 2',
            company: '@login2'
        },
        {
            id: 3,
            name: 'Имя 3',
            photo: '/doctor.jpg',
            text: 'Отзыв 3',
            company: '@login3'
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderTrackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);

    useEffect(() => {
        if (sliderTrackRef.current) {
            setTrackWidth(sliderTrackRef.current.offsetWidth);
        }
    }, [testimonials]);

    useEffect(() => {
        if (sliderTrackRef.current) {
            sliderTrackRef.current.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
            console.log(sliderTrackRef.current.style.transform);
        }
    }, [currentIndex, trackWidth]);

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
                <div className="slider-track" style={{ width: `${testimonials.length * 100}%`, }} ref={sliderTrackRef} >
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
            <a href="" className="testimonial-link-below">Смотреть все отзывы</a>
        </div>
    );
};

export default Testimonials;