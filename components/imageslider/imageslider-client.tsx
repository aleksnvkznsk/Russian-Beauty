import ImageSlider from './imageslider';
import './imagesliderclient.scss'

const gallery1Images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
];

const gallery2Images = [
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image1.jpg',
];

const gallery3Images = [
    '/image3.jpg',
    '/image4.jpg',
    '/image1.jpg',
    '/image2.jpg',
];

const gallery4Images = [
    '/image4.jpg',
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
];


const ImageSliderClient = () => {
    return (
        <div className='slider-page'>
            <h1 className='slider-title'>Галерея</h1>
            <div className='slider-grid'>
                <ImageSlider imagePaths={gallery1Images} altText='Галерея 1' aspectRatio={'16/9'} interval={10000}/>
                <ImageSlider imagePaths={gallery2Images} altText='Галерея 2' aspectRatio={'16/9'} interval={14000}/>
                <ImageSlider imagePaths={gallery3Images} altText='Галерея 3' aspectRatio={'16/9'} interval={16000}/>
                <ImageSlider imagePaths={gallery4Images} altText='Галерея 4' aspectRatio={'16/9'} interval={10500}/>
            </div>
        </div>
    );
};

export default ImageSliderClient;