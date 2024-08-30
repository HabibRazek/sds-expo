import BadgeSignUp from '@/components/badgesignup/BadgeSignUp'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="banner-container p-4 md:p-8">
                <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white text-center">
                    VISITER
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                </h1>
                <div>
                    <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white text-center">
                        <Link className='underline underline-offset-1 mx-2' href='/'>ACCEUIL</Link> /
                        <Link className='underline underline-offset-1 mx-2' href="/visiter" >VISITER</Link> 
                    </h1>
                </div>
            </div>

            <BadgeSignUp />

            <div className='max-w-screen-xl  mb-8 px-4 py-3 mx-auto mt-8'>
                <div className="flex flex-col md:flex-row space-x-4 ">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-extrabold mb-2 text-red-500 text-justify"> S’informer et découvrir </h2>
                        <p className="text-gray-600 text-justify">
                            DS Expo 2023 peut offrir aux intéressés de nombreuses opportunités de développement professionnel, d&apos;apprentissage, de réseautage et de découverte de nouvelles solutions pour leurs entreprises.
                            C&apos;est une occasion de rester à jour avec les dernières tendances du secteur de la chaine d’approvisionnement, de la logistique et de la mobilité de rencontrer des acteurs clés de la filière.
                        </p>
                    </div>
                    <div className="md:w-1/2 mx-auto">
                        <Image
                            src="/Global-Supply-Chain.jpg"
                            alt="Image"
                            className="w-full mx-auto h-auto"
                            width={400}
                            height={400}
                            priority={true}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </div>

                <h1 className="text-center mt-8 mb-8 font-bold text-4xl text-gray-900 text-center">
                    Visiter raisons et avantages
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-3/5 mx-auto" />
                </h1>

                <div className="flex flex-col md:flex-row mb-8">
                    <div className="md:w-1/2 mx-auto">
                        <Image
                            src="/nouvelles solutions.jpg"
                            alt="nouvelles solutions"
                            className="w-full h-auto"
                            width={400}
                            height={400}
                            priority={true}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>

                    <div className="md:w-1/2 mx-4 p-4">
                        <h2 className="text-2xl font-extrabold mb-2 text-red-500 text-justify">Découvrir de nouvelles solutions:</h2>
                        <p className="text-gray-600 text-justify">
                            les visiteurs peuvent explorer les stands des exposants et découvrir de nouvelles solutions et technologies, des produits et des solutions innovantes pour améliorer leurs opérations.
                        </p>
                        <p className="text-gray-600 mt-5 text-justify">
                            Cela peut les aider à résoudre des problèmes spécifiques et à prendre des décisions éclairées.
                            C&apos;est aussi une occasion de rester à jour avec les dernières tendances et de trouver des solutions qui pourraient améliorer leurs entreprise.
                        </p>
                        <div className='text-gray-600 mt-5 text-justify'>
                            <span className='text-red-500 text-2xl font-extrabold'>Réseautage :</span>
                            <br className='mb-2' />
                            SDS EXPO 2023 offre aux visiteurs la possibilité de rencontrer des exposants, des experts, des professionnels et des spécialistes de la filière, pour améliorer leurs productivités, consolider l’offre client et élargir leurs réseaux professionnels.
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row space-x-4 ">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-extrabold mb-2 text-red-500 text-justify">Rencontrer des fournisseurs et des partenaires potentiels:</h2>
                        <p className="text-gray-600 text-justify">
                            SDS EXPO 2023 permettra aux visiteurs de rencontrer des fournisseurs, des fabricants de solutions innovantes et des partenaires potentiels. C&apos;est alors une opportunité de discuter en personne, de poser des questions et de développer des partenariats stratégiques.
                        </p>
                        <div className='text-gray-600 mt-5 text-justify'>
                            <span className='text-red-500 text-2xl font-extrabold'>Accès à des offres spéciales :</span>
                            <br />
                            Certains exposants peuvent proposer des offres spéciales ou des remises exclusives aux visiteurs du salon. Cela peut être très avantageux pour les visiteurs de SDS EXPO qui souhaite acheter des produits ou des services spécifiques à des conditions préférentielles.
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto" >
                        <Image
                            src="/Rencontrer des fournisseurs et des partenaires potentiels.jpg"
                            alt="Rencontrer des fournisseurs et des partenaires potentiels"
                            className="w-full h-auto mx-auto"
                            width={400}
                            height={400}
                            priority={true}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page
