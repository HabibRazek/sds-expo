"use client"
import React, { useState } from 'react';

// Assuming images are categorized into 'Exposition' and 'Conférence'
const images = [
    { url: "/gallery/1.jpg", category: "Exposition" },
    { url: "/gallery/2.jpg", category: "Exposition" },
    { url: "/gallery/3.jpg", category: "Exposition" },
    { url: "/gallery/4.jpg", category: "Exposition" },
    { url: "/gallery/5.jpg", category: "Conférence" },
    { url: "/gallery/6.jpg", category: "Exposition" },
    { url: "/gallery/7.jpg", category: "Exposition" },
    { url: "/gallery/8.jpg", category: "Exposition" },
    { url: "/gallery/9.jpg", category: "Conférence" },
    { url: "/gallery/10.jpg", category: "Conférence" },
    { url: "/gallery/11.jpg", category: "Exposition" },
    { url: "/gallery/12.jpg", category: "Exposition" },
    { url: "/gallery/13.jpg", category: "Exposition" },
    { url: "/gallery/14.jpg", category: "Exposition" },
    { url: "/gallery/15.jpg", category: "Exposition" },
    { url: "/gallery/16.jpg", category: "Exposition" },
    { url: "/gallery/17.jpg", category: "Exposition" },
    { url: "/gallery/18.jpg", category: "Exposition" },
    { url: "/gallery/19.jpg", category: "Exposition" },
    { url: "/gallery/20.jpg", category: "Exposition" },
    { url: "/gallery/21.jpg", category: "Exposition" },
    { url: "/gallery/22.jpg", category: "Exposition" },
    { url: "/gallery/23.jpg", category: "Exposition" },
    { url: "/gallery/24.jpg", category: "Exposition" },
    { url: "/gallery/25.jpg", category: "Exposition" },
    { url: "/gallery/26.jpg", category: "Exposition" },
    { url: "/gallery/27.jpg", category: "Exposition" },
    { url: "/gallery/28.jpg", category: "Exposition" },
    { url: "/gallery/29.jpg", category: "Exposition" },
    { url: "/gallery/30.jpg", category: "Exposition" },
    { url: "/gallery/31.jpg", category: "Exposition" },
    { url: "/gallery/32.jpg", category: "Exposition" },
    { url: "/gallery/33.jpg", category: "Exposition" },
    { url: "/gallery/34.jpg", category: "Exposition" },
    { url: "/gallery/35.jpg", category: "Exposition" },
    { url: "/gallery/36.jpg", category: "Exposition" },
    { url: "/gallery/37.jpg", category: "Exposition" },
    { url: "/gallery/38.jpg", category: "Exposition" },
    { url: "/gallery/39.jpg", category: "Exposition" },
    { url: "/gallery/40.jpg", category: "Exposition" },
    { url: "/gallery/41.jpg", category: "Conférence" },
    { url: "/awards/1.jpg", category: "Awards" },
    { url: "/awards/2.jpg", category: "Awards" },
    { url: "/awards/3.jpg", category: "Awards" },
    { url: "/awards/4.jpg", category: "Awards" },
    { url: "/awards/5.jpg", category: "Awards" },
    { url: "/awards/6.jpg", category: "Awards" },
    { url: "/awards/7.jpg", category: "Awards" },
    { url: "/awards/8.jpg", category: "Awards" },
    { url: "/awards/9.jpg", category: "Awards" },
    { url: "/awards/10.jpg", category: "Awards" },
    { url: "/awards/11.jpg", category: "Awards" },
    { url: "/awards/12.jpg", category: "Awards" },
    { url: "/awards/13.jpg", category: "Awards" },
    { url: "/awards/14.jpg", category: "Awards" },
    { url: "/awards/15.jpg", category: "Awards" },
    { url: "/awards/16.jpg", category: "Awards" },
    { url: "/awards/17.jpg", category: "Awards" },
    { url: "/awards/18.jpg", category: "Awards" },

];

const categories = ["Exposition", "Conférence","Awards"];

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default to the first category

    const filteredImages = images.filter(image => image.category === selectedCategory);

    return (
        <div className="w-9/12 mx-auto my-10">
            <h2 className="text-2xl font-bold text-center my-8">Galerie Expo SDS</h2>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`text-black border-b-2 px-5 py-2.5 text-center mr-3 mb-3 font-medium text-base transition duration-300 ease-in-out ${selectedCategory === category ? 'border-red-600' : 'border-transparent hover:border-gray-300'
                            } focus:outline-none`}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                        <img className="h-auto max-w-full rounded-lg transform hover:scale-110 transition duration-500 ease-in-out" src={image.url} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
