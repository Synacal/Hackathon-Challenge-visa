import { useState } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/images/slide-0.png', alt: 'Visa Processing Made Easy!' },
  { src: '/images/slide-1.png', alt: 'Slide 1' },
  { src: '/images/slide-2.png', alt: 'Slide 2' },
  { src: '/images/slide-3.png', alt: 'Slide 3' },
  { src: '/images/slide-4.png', alt: 'Slide 4' },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="flex justify-center">
        <Image
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Navigation */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button onClick={prevSlide} className="text-gray-500 hover:text-gray-900">
          &lt;
        </button>
        <button onClick={nextSlide} className="text-gray-500 hover:text-gray-900">
          &gt;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
