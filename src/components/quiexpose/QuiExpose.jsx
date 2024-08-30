import React from 'react';

const QuiExpose = () => {
    const benefits = [
        "Augmenter la visibilité de l’entreprise, renforcer son image et la promotion de la marque.",
        "Expendre leur base de clients potentiels et l’amélioration des relations commerciales.",
        "Favoriser les échanges entre les professionnels.",
        "Acquérir de nouvelles compétences et mieux comprendre les enjeux de leurs métiers.",
        "La génération de nouveaux leads commerciaux.",
        "Accroitre le réseau professionnel de l’exposant, tisser des liens et développer son réseau.",
        "La collecte de données et d’informations pertinentes, confirmées et précises sur les besoins et les tendances du marché qu’ils pourraient exploiter pour bien adapter leurs offres et prendre des décisions commerciales éclairées.",
        "Marquer la présence de votre enseigne parmi des professionnels et des acteurs confirmés de la filière.",
        "Développer votre activité en s’exposant à de nouveaux clients demandeurs cherchant des solutions ou des offres qui pourraient être dans le cœur de vos propositions lors du salon.",
        "Valoriser votre offre et savoir-faire, consolider et renforcer votre positionnement ainsi que votre image de sur un marché en pleine effervescence et expansion.",
        "Bénéficier de la notoriété du salon et de la force d’une communauté dynamique qui ne cesse pas de s’amplifier.",
        "Permettre une Veille concurrentielle adaptée."
    ];

    return (
        <div className='max-w-6xl px-4 py-10 mx-auto mt-10 bg-white shadow-md rounded-lg'>
            <div className="flex flex-col md:flex-row items-start md:space-x-8">

                {/* Text (Right side) */}
                <div className="md:w-5/6 p-4 mx-auto">
                    <h2 className="text-4xl font-bold mb-5 text-center text-red-600">
                        Exposer, Avantages et intérêts
                    </h2>
                    <div className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start text-lg">
                                <span className="inline-block font-semibold text-red-600 mr-3 mt-1">➔</span> 
                                <p className="leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuiExpose;