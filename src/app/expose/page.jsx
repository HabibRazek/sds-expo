import ExpoList from '@/components/liste-exposant/ExpoList';
import QuiExpose from '@/components/quiexpose/QuiExpose';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardGrid = () => {
    const cards = [
        {
            imgSrc:
                '/1.jpg',
            title: 'LES SOCIÉTÉS DE LIVRAISON  ',
            info: ' Livraison à domicile / Fournisseurs de Services de Livraison Rapide / Véhicules et Équipements de Livraison / Distribution /  Messagerie et Courrier /   Livraison Restauration et Alimentation',
            
            altTitle: 'Lorem ipsum dolor sit',
        },
        {
            imgSrc:
                '/2.jpg',
            title: 'LES SOCIÉTÉS DE LOGISTIQUES ',
            info: 'Armateurs / Transitaires / Douanes',
            altTitle: 'LES SOCIÉTÉS DE LOGISTIQUES',

        },
        {
            imgSrc:
                '/3.jpg',
            title: 'LES SOCIÉTÉS DE TRANSPORT',
            info: 'Service  de transport de marchandises par voie terrestre, maritime, aérienne et ferroviaire / Transporteur routier ',
            altTitle: 'Lorem ipsum dolor sit',

        },
        {
            imgSrc:
                '/4.jpg',
            title: 'SOLUTIONS TECHNOLOGIQUES INNOVANTES',
            info: '	Équipement informatique / Logiciels et application technologique de gestion / Système de localisation / Équipement d’identification & de traçabilité  / Télécoms et réseaux ',
            altTitle: 'TECHNOLOGIE & SYSTEME D’INFORMATION',

        },
        {
            imgSrc:
                '/5.jpg',
            title: 'SOLUTIONS DE GESTION DE LA CHAINE D’APPROVISIONNEMET ',
            info: '	Matériel de manutention / Palettiseur / Caisses / Accessoires de levage /Conteneurs /Etc… ',
            altTitle: 'MANUTENSION',

        },
        {
            imgSrc:
                '/6.jpg',
            title: 'SERVICES DE CONSEIL ET DE FORMATION ',            
            info: '	Universités  / Ecoles supérieures / Centre de formation / Cabinets de consulting et d’accompagnement / Entreprises de Contrôle de la Qualité', 
            altTitle: 'CONSEIL& FORMATION ',

        },
        {
            imgSrc:
                '/7.jpg',
            title: 'SOLUTIONS D’EMBALLAGE ET DE CONDITIONNEMENT ',
            info: 'Sociétés de Conception de Packaging / Fournisseurs de Machines de Conditionnement',
            altTitle: 'EMBALLAGE',

        },
        {
            imgSrc:
                '/8.jpg',
            title: 'BANQUES & SERVICES DE FINANCEMENT ',
            info: 'Banques / Leasing / Bailleurs de fond BANQUES & SERVICES DE FINANCEMENT   ',
            altTitle: 'BANQUES & SERVICES DE FINANCEMENT ',

        },
        {
            imgSrc:
                '/9.jpg',
            title: 'ÉQUIPEMENTS DE TRANSPORT',
            info: 'Constructeur et concessionnaire de semi-remorques/Constructeurs et concessionnaire de véhicules industriels /Constructeur de véhicules utilitaires /	Réseau de distribution 	Pneumatiques /	Equipements de véhicules /	Autres équipements ',
            altTitle: 'ÉQUIPEMENTS DE TRANSPORT',

        },
    ];

    return (

        <div>
            <div className="banner-container p-4 md:p-8">
                <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
                    EXPOSER
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                </h1>
                <div>
                    <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white"><Link className='underline underline-offset-1 mx-2' href='/'>ACCEUIL</Link> /
                        <Link className='underline underline-offset-1 mx-2' href="/expose" >EXPOSER</Link> </h1>
                </div>
            </div>


            <ExpoList />


            <div className="max-w-screen-xl mb-8  py-3 mx-auto mt-8">
                <h1 className="text-center mt-8 mb-8 font-bold text-4xl text-gray-900">
                    Les exposants : secteurs  et profils
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-3/5 mx-auto" />
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 mb-8 posi1">
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <Image
                                src={card.imgSrc}
                                className="card-img"
                                alt={card.altTitle}
                                width={320}
                                height={320}
                                priority={true}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <div className="card-body">
                                <h1 className="card-title">{card.title}</h1>
                                <p className="card-info">{card.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="my-8 border-red-600 border-solid border-t-4 w-3/5 mx-auto" />

                <QuiExpose />
            </div>
        </div>



    );
};

export default CardGrid;
