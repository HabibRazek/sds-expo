"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sponsors = [
    { icon: '/gallery/1.jpg', title: '' },
    { icon:'/gallery/2.jpg', title: '' },
    { icon: '/gallery/3.jpg', title: '' },
    { icon:'/gallery/4.jpg', title: '' },
    { icon: '/gallery/5.jpg', title: '' },
    { icon: '/gallery/6.jpg', title: '' },

    
];

const chunkArray = (arr, size) => {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const DiscoverGallery = () => {
    const chunks = chunkArray(sponsors, 3);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnSlideChange = index => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % chunks.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [chunks]);

    return (
        <div className="sm:w-9/12 mx-auto mt-10  ">
            
            <Carousel
                selectedItem={currentIndex}
                onChange={handleOnSlideChange}
                autoPlay
                infiniteLoop
                interval={2500}
                stopOnHover={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                emulateTouch
            >
                {chunks.map((chunk, index) => (
                    <div key={index} className="flex justify-center items-center">
                        {chunk.map((partenaire, idx) => (
                            <div key={idx} className="flex-1 flex justify-center items-center px-2">
                                <Image src={partenaire.icon} alt={partenaire.title} width={280}
                                    height={160}
                                    priority={true}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>

            <div className="flex justify-center mt-4">
                {chunks.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-red-600' : 'bg-gray-400'} hover:opacity-80 transform hover:scale-110 transition-transform`}
                        onClick={() => handleOnSlideChange(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DiscoverGallery;
