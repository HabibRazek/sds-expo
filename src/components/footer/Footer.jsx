'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
    const whatsappNumber = '+21650095115';

const handleClick = () => {
    window.location.href = `tel:${whatsappNumber}`;
};

    return (
        <footer className="bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4">
                <Image src="/SDSEXPO footer.png" alt="SDSEXPO logo" width={150} height={150} priority={true} style={{ width: '150', height: '150' }} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-white">
                        <ul className="list-disc pl-6 md:list-inside md:list-disc">
                            <li className="flex items-center mb-4">
                                <Image src="/email.png" width={30} height={30} alt="Email Icon" priority={true} style={{ width: '30', height: '30' }} />
                                <span className="ml-2">contact@sds-expo.com</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <Image src="/telephone.png" width={30} height={30} alt="Phone Icon" priority={true} style={{ width: '30', height: '30' }} />
                                <span className="ml-2">+216 29 36 22 55</span>
                            </li>
                            <li className="flex items-center mb-4">
                                <Image src="/calendrier.png" width={30} height={30} alt="Calendar Icon" priority={true} style={{ width: '30', height: '30' }} />
                                <span className="ml-2">01 et le  02 Novembre 2023</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/position.png" width={30} height={30} alt="Position Icon" priority={true} style={{ width: '30', height: '30' }} />
                                <span className="ml-2">Centre international des congrès de l’UTICA</span>
                            </li>
                        </ul>

                    </div>
                    <div className="text-white">
                        <h2 className="text-2xl font-semibold mb-4">Liens utiles</h2>
                        <ul >
                            <li className="mb-2">
                                <Link href="/">
                                    <p className="text-gray-300 hover:text-white">Accueil</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/about">
                                    <p className="text-gray-300 hover:text-white">Découvrez la SDS</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/expose">
                                    <p className="text-gray-300 hover:text-white">Qui Expose ?</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/programme">
                                    <p className="text-gray-300 hover:text-white">Programme</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/info">
                                    <p className="text-gray-300 hover:text-white">Infos pratiques</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h2 className="text-2xl font-semibold mb-4">Suivez-nous</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=100094227490646" target="_blank" className="text-gray-300 hover:text-white">
                                <Image
                                    src="/icon1.png"
                                    alt="facebook"
                                    width={30}
                                    height={30}
                                    priority={true}
                                    style={{ width: '30', height: '30' }}
                                />
                                
                            </a>
                            <a href="https://www.linkedin.com/company/sds-expo/" target="_blank" className="text-gray-300 hover:text-white">
                                <Image
                                    src="/icon2.png"
                                    alt="linkedin"
                                    width={30}
                                    height={30}
                                    priority={true}
                                    style={{ width: '30', height: '30' }}
                                />
                                
                            </a>
                            <a href="#" onClick={handleClick} className="text-gray-300 hover:text-white">
                                <Image
                                    src="/icon3.png"
                                    alt="watsapp"
                                    width={30}
                                    height={30}
                                    priority={true}
                                    style={{ width: '30', height: '30' }}
                                />
                                
                            </a>
                            <a href="https://www.instagram.com/sdsexpo/" target="_blank" className="text-gray-300 hover:text-white">
                                <Image
                                    src="/icon4.png"
                                    alt="Instagram"
                                    width={30}
                                    height={30}
                                    priority={true}
                                    style={{ width: '30', height: '30' }}
                                />
                                
                            </a>
                        </div>
                        <div className='mt-8'>
                            <div className="flex items-center justify-center space-x-4">
                                <div className="flex items-center">
                                    
                                    <Image src="/NEO INFLUENCE.png" alt="NEO INFLUENCE" width={150} height={150} priority={true} style={{ width: '150', height: '150' }} />
                                </div>

                                
                            </div>
                        </div>


                    </div>
                </div>


            </div>

        </footer>
    )
}

export default Footer