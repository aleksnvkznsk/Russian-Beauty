import FullScreenSlider from "./fullscreenslider";

const slides = [
    {
        id: 1,
        imageUrl: './image1.jpg',
        title: 'Коллагеновая терапия',
        leftWords: ['ГЛАДКОСТЬ', 'УПРУГОСТЬ', 'ПОДТЯНУТАЯ КОЖА'],
    },
    {
        id: 2,
        imageUrl: './image2.jpg',
        title: 'Пилинги',
        leftWords: ['Идеальная кожа без пегментации'],
    },
    {
        id: 3,
        imageUrl: './image3.jpg',
        title: 'Слайд 3',
        leftWords: ['Текст', 'Текст'],
    },

];

export default function IntroClient() {
    return <FullScreenSlider slides={slides} />
}