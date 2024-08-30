"use client"
import React, { useState, useEffect } from 'react';

const persons = [
    {
        name: "Oussama GHARIANI",
        title: "Président de la TSCMA",
        description: "Directeur Supply Chain Afrique du Nord chez CIX Valeo",
        imageUrl: "/conf/Oussema Ghiriani.png"
    },
    {
        name: "Mehdi BEN CHAABANE",
        title: "Consultant Senior en Digitalisation des process industriels et Supply Chain",
        imageUrl: "/conf/Mehdi BEN CHAABANE.png"
    },
    {
        name: "Ahmed Karam",
        title: "Président du Conseil d’Administration de Tunisie Leasing et factoring",
        imageUrl: "/conf/Ahmed Karam.png"
    },
    {
        name: "Mohamed Salah Frad",
        title: "Président de l'Association Tunisienne des Investisseurs en Capital",
        imageUrl: "/conf/Mohamed Salah Frad.png"
    },
    {
        name: "Leith Lakhoua",
        title: "Expert Technique Supply chain & Organisation Industrielle",
        imageUrl: "/conf/Leith Lakhoua.png"
    },
    {
        name: "Malek Chouchane",
        title: "Expert Union postal universel UPU Expert international en adressage",
        imageUrl: "/conf/Malek Chouchane.png"
    },
    {
        name: "Bassem thabti",
        title: "EXPERT EN DIGITALISATION DES PROCESSUS METIERS",
        imageUrl: "/conf/Bassem thabti.png"
    },
    {
        name: "BILEL SAHNOUN",
        title: "Directeur général de la bourse de Tunis",
        imageUrl: "/conf/Bilel sahnoun.png"
    },
    {
        name: "Mhamed Zouaoui",
        title: "Consultant Senior en Management des Performances et des Risques",
        imageUrl: "/conf/Mhamed Zouaoui.png"
    },
    {
        name: "Nidhal REZG",
        title: "Professeur des Universités Directeur du Laboratoire LGIPM de l’ Université de Lorraine Porteur du Projet de l’Ecole d'Ingénieurs en Logistique sur Metz",
        imageUrl: "/conf/Nidhal Rezg.png"
    },
    {
        name:"Ali Helali",
        title:"Directeur de l’Institut Supérieur du Transport et de la Logistique de Sousse, Université de Sousse",
        imageUrl:"/conf/Ali Helali.png"
    },
    {
        name:"Chamseddine Ben Abda",
        title:"Chef direction développement relation entreprise",
        imageUrl:"/conf/Chamseddine Ben Abda.png",
    },
    {
        name:"Ahmed Alilesh",
        title:"Founder - Droppex",
        imageUrl:"/conf/Oussema Tarchalla.png",

    },
    {
        name:"Oussema Tarchalla",
        title:"Directeur Commercial AST",
        imageUrl:"/conf/Ahmed Alilesh.png",

    }

];

const Intervenus = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="bg-transparent">
            <div className="container px-6 py-4 mx-auto">
                {isLoading ? (
                    <div className="animate-pulse">
                        {/* Skeleton or loading animation */}
                    </div>
                ) : (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-center mb-10">Ils sont intervenus sur SDS EXPO 2023</h1>
                        <div className="flex flex-wrap justify-center items-start gap-10">
                            {persons.map((person, index) => (
                                <div key={index} className="flex flex-col items-center w-64">
                                    <img
                                        src={person.imageUrl}
                                        alt={person.name}
                                        className="w-56 h-w-56 object-cover rounded-full border-2 border-gray-300 mb-4"
                                    />
                                    <h2 className="text-lg font-semibold">{person.name}</h2>
                                    <p className="text-sm text-center text-gray-500">{person.title}</p>
                                    {person.description && <p className="mt-1 text-gray-600 text-center">{person.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Intervenus;
