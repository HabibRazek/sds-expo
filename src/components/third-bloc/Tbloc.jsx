import Image from 'next/image';
import React from 'react';

const Tbloc = () => {
    return (
        <div className='max-w-screen-xl px-4 py-8 mx-auto mt-3 bg-gradient-to-r mb-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105'>
            <h2 className="text-4xl md:text-3xl font-bold mb-2 text-center text-red-600 mb-8">Les conférences</h2>
            <div className="flex flex-col md:flex-row items-center">
                {/* Text (Right side) */}
                <div className="md:w-1/2 p-4 bg-white bg-opacity-80 rounded-md shadow-md mb-4 md:mb-0">
                    <p className="text-gray-800 text-lg mb-4">
                        Le salon SDS EXPO 2023 offre également des conférences de qualité avec des témoignages et des retours d’expérience de professionnels reconnus et experts de haut niveau.
                    </p>
                    <p className="text-gray-800 text-lg mb-4">
                        Ces sessions animées par des experts et des spécialistes du secteur offriront aux participants (exposants et visiteurs) une occasion pour approfondir leurs connaissances.
                    </p>
                    <p className="text-gray-800 text-lg">
                        De multiples thématiques touchant le cœur du métier seront au rendez-vous avec un sujet principal et de taille.
                    </p>
                </div>
                {/* Image (Left side) */}
                <div className="md:w-1/2 p-4">
                    <Image
                        src="/Les conférences.jpg"
                        alt="Les conférences"
                        className="rounded-md shadow-lg w-full mx-auto h-auto transition-transform transform hover:-translate-y-1 hover:scale-105"
                        width={380}
                        height={380}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Tbloc;
