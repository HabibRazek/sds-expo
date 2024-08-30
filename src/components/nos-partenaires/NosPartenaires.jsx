"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const partenaires = [
    {
        icon: '/CourEx.png',
        title: 'CourEx',
    },
    {
        icon:'/Les Ambassadeurs de la Sécurité Routière.png',
        title: 'Les Ambassadeurs de la Sécurité Routière',
    },
    {
        icon: '/Tuniscope.png',
        title: 'Tuniscope',
    },
    {
        icon: '/Packedin.png',
        title: 'Packedin',
    },
    {
        icon:'/kss net.png',
        title: 'kss net',
    },
    
    {
        icon: '/North point secuirty.jpg',
        title: 'North point secuirty',
    },
    {
        icon: '/istls.png',
        title: 'istls',
    },
    {
        icon: '/tunivision.png',
        title: 'tunivision',
    },
    {
        icon: '/Tuniscope.png',
        title: 'Tuniscope',
    },
    
    
    

];

const chunkArray = (arr, size) => {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const NosPartenaires = () => {
    const chunks = chunkArray(partenaires, 3);
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
        <div className="sm:w-3/6 mx-auto">
            <h1 className="text-center mt-8 font-bold text-3xl text-gray-900">
                Nos Partenaires
                <hr className="mt-2 border-red-600 border-solid border-t-4 w-52 mx-auto" />
            </h1>

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
                    <div key={index} className="carousel-chunk">
                        {chunk.map((partenaire, idx) => (
                            <div key={idx} className="partenaire-item">
                                <Image src={partenaire.icon} alt={partenaire.title} width={150}
                                    height={60}
                                    priority={true}
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
                        className={`pagination-dot ${
                            currentIndex === index ? 'active' : ''
                        }`}
                        onClick={() => handleOnSlideChange(index)}
                    />
                ))}
            </div>
            <style jsx global>{`
                .carousel-chunk {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .partenaire-item {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 10px;
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

export default NosPartenaires;