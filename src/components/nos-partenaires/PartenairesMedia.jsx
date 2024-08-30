"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PartenairesMedia = () => {
    const partenaires = [
        {
            icon: '/La Presse.png',
            title: 'La Presse',
        },
        {
            icon: '/logo-acharaa-mobile.jpg',
            title: 'الشارع المغاربي',
        },
        {
            icon: '/Radio Med.png',
            title: 'Radio med',
        },
        {
            icon: '/logo-acharaa-mobile.jpg',
            title: 'الشارع المغاربي',
        },
        
        {
            icon: '/gteam.png',
            title: 'gteam',
        },
        {
            icon: '/La Presse.png',
            title: 'La Presse',
        },
    ];
    const chunkSize = 3;
    const chunks = [];

    for (let i = 0; i < partenaires.length; i += chunkSize) {
        chunks.push(partenaires.slice(i, i + chunkSize));
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnSlideChange = index => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === chunks.length - 1 ? 0 : prevIndex + 1
            );
        }, 2500);

        return () => clearInterval(interval);
    },);

    return (
        <div className="carousel-container sm:w-3/6 mx-auto mb-8">
            <h1 className="text-center mt-8 font-bold text-3xl text-gray-900">
                Nos Partenaires Médias
                <hr className="mt-2 border-red-600 border-solid border-t-4 w-52 mx-auto" />
            </h1>
            <Carousel
                selectedItem={currentIndex}
                onChange={handleOnSlideChange}
                autoPlay
                interval={2500}
                stopOnHover={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                emulateTouch
            >
                {chunks.map((chunk, index) => (
                    <div key={index} className="carousel-chunk">
                        {chunk.map((partenaire, idx) => (
                            <div key={idx} className="partenaire-item">
                                <Image
                                    src={partenaire.icon}
                                    alt={partenaire.title}
                                    width={150}
                                    height={60}
                                    priority={true}
                                    style={{ width: '150', height: '60' }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
            <div className="pagination-dots text-center">
                {chunks.map((_, index) => (
                    <span
                        key={index}
                        className={`pagination-dot ${currentIndex === index ? 'active' : ''
                            }`}
                        onClick={() => handleOnSlideChange(index)}
                    />
                ))}
            </div>
            <style jsx global>{`
                .carousel-container {
                    /* Add your styles for the container if needed */
                }
                .carousel-chunk {
                    display: flex;
                    justify-content: space-between;
                }
                .partenaire-item {
                    flex-basis: calc(25% - 10px); /* Adjust this value to change container width */
                    margin-right: 10px;
                    display: flex;
                    justify-content: center; /* Horizontally centers the image */
                    align-items: center; /* Vertically centers the image */
                }
                .pagination-dots {
                    display: flex;
                    justify-content: center;
                }
                .pagination-dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    margin: 0 4px;
                    background-color: #bbb;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .pagination-dot.active {
                    background-color: #e60000;
                }
            `}</style>
        </div>
    );
};

export default PartenairesMedia;