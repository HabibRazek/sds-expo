import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <div className="banner-container p-4 md:p-8">
                <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
                    DÉCOUVREZ LA SDS

                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                </h1>
                <div>
                    <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white"><Link className='underline underline-offset-1 mx-2' href='/'>ACCEUIL</Link> /
                        <Link className='underline underline-offset-1 mx-2' href="/about" >DÉCOUVREZ LA SDS
                        </Link> </h1>
                </div>
            </div>
            <div className='max-w-screen-xl px-4 py-3 mx-auto'>

                {/* second bloc */}
                <div className="flex flex-col md:flex-row  p-4">
                    {/* Left Side - Image */}
                    <div className="md:w-1/2 mx-auto md:pr-4 order-2 md:order-1">
                        <Image
                            src="/Chaîne d'Approvisionnement.jpg"
                            alt="Image"
                            className="object-cover w-full mx-auto h-auto rounded-lg md:w-auto md:h-auto"
                            width={400}
                            height={400}
                            priority={true}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>

                    {/* Right Side - Text */}
                    <div className="md:w-1/2 mt-4 mx-4 md:mt-0 order-1 md:order-2 mb-8">
                        <h2 className="text-2xl font-extrabold text-red-600 mb-4">SDS EXPO 2023</h2>

                        <p className="text-gray-600 text-justify">
                            SDS EXPO 2023, SUPPLY CHAIN & DELIVERY SERVICES EXIHIBITION est l’occasion unique pour les visiteurs et les professionnels qui s’y intéressent? ils y trouverons des solutions concrètes, des nouveaux produits, des solutions de transport avancées et des outils pour optimiser la chaine d’approvisionnement améliorer la gestion du stock pour une meilleure rentabilité afin de diminuer les coûts et consolider l’expérience client.
                        </p>
                        <div className="order-2 md:order-1">
                            <h3 className='text-gray-600 mb-4 mt-4'>
                                SDS EXPO est également une occasion irréprochables pour :
                            </h3>
                            <ul className="list-disc text-gray-600 list-inside">
                                <li>Réseauter</li>
                                <li>Faire le plein d’idées</li>
                                <li>Accroitre leur réseau professionnel</li>
                                <li>Échanger et établir de nouveaux partenariats commerciaux à travers des sessions de Networking et de convivialité qui seront tenues dans des espaces dédiés et aménagés pour accueillir confortablement ses utilisateurs.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mx-4 p-4">
                    <div className="md:w-1/2 md:pr-4">
                        <p className="text-gray-600 text-justify">
                            La première édition du salon SDS EXPO 2023 se déroulera dans un lieu spacieux moderne spécialement aménagé pour l’occasion et se tiendra pendant deux fructueuses journées, à savoir, le 01 et le 02 Novembre 2023 au centre international des congrès de l’UTICA.
                        </p>
                        <br />
                        <p className="text-gray-600 text-justify">
                            SDS EXPO 2023 est meublé de stands de différents exposants qui seront disposés, les allées sont larges et facile à accéder pour permettre aux visiteurs de se déplacer facilement entre les différents stands et les espaces dédiés aux exposants.
                        </p>
                        <br />
                        <p className="text-gray-600 text-justify">
                            Nous estimons pour cette première édition un nombre considérable de participants qualifiés et de visiteurs professionnels issus des différents secteurs d’activité et fonctions d’entreprise, de toute la Tunisie.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 mt-4 mx-auto md:mt-0">
                        <Image
                            src="/Union tunisienne de l'industrie, du commerce et de l'artisanat.jpg"
                            alt="Last door delivery SDS Expo"
                            className="object-cover w-full h-auto mx-auto rounded-lg"
                            width={400}
                            height={400}
                            priority={true}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
