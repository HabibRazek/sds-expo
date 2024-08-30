import Image from 'next/image';
import React from 'react';

const FifBloc = () => {
    const sectors = [
        {
            icon: '/Servicesdelivraison.png',
            title: 'Services de livraison',
            
        },
        {
            icon: '/Services logistiques.png',
            title: 'Services logistiques',
        },
        {
            icon: '/Services de transport.png',
            title: 'Services de transport',
        },
        {
            icon: '/Solutions technologiques innovantes.png',
            title: 'Solutions technologiques innovantes',
        },
        {
            icon: "/Solutions d'emballage et de conditionnement.png",
            title: "Solutions d'emballage et de conditionnement",
        },
        {
            icon: '/Services de Conseil, Formations et Financement.png',
            title: 'Services de Conseil, Formations et Financement',
        },
        {
            icon: '/Solutions de gestion de la chaine  d’approvisionnement.png',
            title: 'Solutions de gestion de la chaine  d’approvisionnement',
        },
        {
            icon: '/Equipements de transport.png',
            title: 'Equipements de transport',
        },
    ];

    return (
        <div className='mt-8 max-w-screen-xl px-4 py-3 mx-auto mb-8'>
            <h1 className="mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl ">Sur le salon, retrouvez en 8 secteurs <br /> les acteurs du marché :</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                {sectors.map((sector, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex items-center justify-center">
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src={sector.icon}
                                alt={`${sector.title} icon`}
                                width={40}
                                height={40}
                                priority={true}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                        <h3 className='text-center mt-3 mb-2 text-sm   font-bold tracking-tight text-gray-800'>{sector.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FifBloc;
