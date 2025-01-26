"use client"
import React, { useState, useEffect, useRef } from 'react';
import './fullscreenslider.scss';
import Link from 'next/link';

interface Slide {
    id: number;
    imageUrl: string;
    title: string;
    leftWords: string[];
}

interface FullScreenSliderProps {
    slides: Slide[];
}

const FullScreenSlider: React.FC<FullScreenSliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="full-screen-slider" ref={sliderRef}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                    <div className="slide-content">
                        <div className="slide-left">
                            <h2 className="slide-title">{slide.title}</h2>
                            <div className="slide-words-container">
                                {slide.leftWords.map((word, index) => (<span key={index} className="slide-word">{word}</span>))}
                            </div>
                        </div>
                        <Link className="slide-right-button" href='/contacts'>Записаться</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FullScreenSlider;