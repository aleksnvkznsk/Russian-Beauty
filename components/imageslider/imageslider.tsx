"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './imageslider.scss';

interface ImageSliderProps {
  imagePaths: string[];
  altText?: string;
  aspectRatio?: string;
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  imagePaths,
  altText = 'Слайд изображений',
  aspectRatio = '16/9',
  interval = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevImageIndex(currentImageIndex)
      setTransitioning(true)
      setTimeout(() => {
        setTransitioning(false);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      }, 300)

    }, interval);

    return () => clearInterval(intervalId);
  }, [imagePaths.length, currentImageIndex, interval]);

  const currentImagePath = imagePaths[currentImageIndex];
  const prevImagePath = imagePaths[prevImageIndex]
  const [width, height] = aspectRatio.split('/').map(Number)

  return (
    <div className="slider-container">
      <div className="image-wrapper" style={{ paddingBottom: `${(height / width) * 100}%` }}>

        <div className="image-container" ref={imageRef} style={{ opacity: transitioning ? 0 : 1 }}>
          <Image
            className="image"
            src={prevImagePath}
            alt={`${altText} ${prevImageIndex + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, 400px'
            style={{ objectFit: 'cover', borderRadius: '30px', position: 'absolute' }}
          />

        </div>
        <div className="image-container" style={{ opacity: transitioning ? 1 : 0 }}>
          <Image
            className="image"
            src={currentImagePath}
            alt={`${altText} ${currentImageIndex + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, 400px'
            style={{ objectFit: 'cover', borderRadius: '30px', position: 'absolute' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;