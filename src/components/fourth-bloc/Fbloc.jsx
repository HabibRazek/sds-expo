import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ imageUrl, title, description, route }) => {
    const cardContent = (
        <div className="max-w-sm bg-white border border-gray-200 mb-4 shadow cursor-pointer">
            <Image
                className="w-full h-auto mx-auto"
                src={imageUrl}
                width={400}
                height={400}
                alt="Card image"
                priority={true}
                style={{ width: "auto", height: "auto" }}
            />
            <div className="p-5">
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-black">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
            <button type="button" className="mb-5 mx-5 text-white bg-red-600 p-2 ">Voir plus</button>

        </div>
    );

    if (route) {
        return (
            <Link href={route} passHref>
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};


const Fbloc = () => {
    const cardsData = [
        {
            imageUrl: "/Delivery awards 2023.jpg",
            title: "Delivery awards 2023",
            description: "Le «Delivery Awards » est une occasion unique pour célébrer les sociétés de livraison qui ont su se démarquer dans un secteur en constante évolution... ",
            route:"/delivery-awards"
        },
        {
            imageUrl: "/Conferences.jpg",
            title: "Les conférences",
            description: "Le salon SDS EXPO 2023 offre également des conférences de qualité avec des témoignages et des  retours d’expérience de professionnels reconnus et experts de haut niveau... ",
            route:"/les-conferences"
        },
        {
            imageUrl: "/B2B.jpg",
            title: "B2B",
            description: "Espace B2B dédié pour une opportunité exceptionnelle de réseautage, de partenariat et d'échange d'idées au cœur de l'industrie. Un moment privilégié pour les participants de tisser des liens professionnels...",
            route:"/programme"


        },
    ];
    return (
        <div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-96 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-red-600" />
                <div className="absolute px-4 bg-white font-extrabold leading-none tracking-tight text-2xl sm:left-1/2 sm:-translate-x-1/2 md:text-3xl lg:text-4xl">
                    SDS EXPO 2023
                </div>

            </div>
            <div className="flex flex-wrap justify-between items-center max-w-screen-xl px-4 py-3 mx-auto">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                    
                ))}
            </div>
        </div>

    );
};

export default Fbloc;
