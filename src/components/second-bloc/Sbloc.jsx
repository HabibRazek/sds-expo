import Image from 'next/image'
import React from 'react'

const Sbloc = () => {
    return (
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
            <div className="flex flex-col md:flex-row">
                {/* Image (Left side) */}
                <div className="md:w-1/2 mx-auto">
                    <Image
                        src="/Supply Chain Delivery Services Exhibition Tunisie.jpg"
                        alt="Supply Chain Delivery Services Exhibition Tunisie"
                        className="w-full  h-auto"
                        width={400}
                        height={400}
                        priority={true}
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>

                {/* Text (Right side) */}
                <div className="md:w-1/2 mx-4 p-4">
                    <h2 className="text-2xl font-semibold mb-2 text-red-500">Supply Chain & Delivery Services Exhibition</h2>
                    <p className="text-gray-600">
                        La première édition du salon  SDS EXPO 2023 se déroulera dans un lieu spacieux moderne spécialement aménagé pour l’occasion et se tiendra pendant deux fructueuses journées, à savoir, <strong>le 01 et le  02 Novembre 2023</strong> au<strong> centre international des congrès de l’UTICA</strong>.</p>
                    <p className="text-gray-600 mt-5">
                        SDS EXPO 2023 est meublé de stands de différents exposants qui seront disposés, les allées sont larges et facile à accéder pour permettre aux visiteurs de se déplacer facilement entre les différents stands et les espaces dédiés aux exposants.
                    </p>
                    <p className="text-gray-600 mt-5">
                    Nous estimons pour cette première édition un nombre considérable de participants qualifiés et de visiteurs professionnels issus des différents secteurs  d’activité et fonctions d’entreprise, de toute la Tunisie. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sbloc