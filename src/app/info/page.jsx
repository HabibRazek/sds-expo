import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="banner-container p-4 md:p-8">
                <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
                    INFORMATIONS PRATIQUES
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                </h1>
                <div>
                    <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white">
                        <Link className="underline underline-offset-1 mx-2" href="/">
                        ACCEUIL
                        </Link>{" "}
                        /
                        <Link className="underline underline-offset-1 mx-2" href="/info">
                            INFORMATIONS PRATIQUES
                        </Link>{" "}
                    </h1>
                </div>
            </div>
            <div className="w-full px-4 py-3 mx-auto mt-8">
                <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    INFORMATIONS PRATIQUES
                </h1>
                <div className="mx-auto mt-8 mb-8 w-2/4">
                    <hr className="border-l-8 border-t-8 border-red-600 font-black my-4" />
                </div>

                <div className="bg-red-600 text-center date-cont flex flex-col items-center justify-center">
                    <div className="mx-auto mt-8 mb-8">
                        <Image
                            src="/calendrier.png"
                            width={70}
                            height={70}
                            alt="Calendar Icon"
                            priority={true}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>

                    <h3 className="text-white font-bold text-6xl">DATES & HORAIRES</h3>
                    <p className="text-white mt-3 mb-5 font-bold text-2xl">
                        Centre international des congrès de l’UTICA
                    </p>
                    <p className="text-white mt-3 mb-5 font-bold text-2xl">
                        01 Novembre 2023
                    </p>
                    <p className="text-white mt-3 mb-5 font-bold text-2xl">
                        02 Novembre 2023
                    </p>
                </div>

                <h1 className="font-bold text-center mt-8  mb-8 text-gray-500">
                    Ici tu as la possibilité de nous localiser avec précision via Google Maps
                </h1>
                <div className="flex justify-center mb-8 mt-8">
                    <div>
                        <a
                            href="https://www.google.com/maps/place/UTICA-UNION+TUN.+DE+L'IND.+DU+COMMERCE+%26+DE+L'ART/@36.8324442,10.1850836,17.97z/data=!4m10!1m2!2m1!1sUtica!3m6!1s0x12fd349152110abf:0x56d8cb1b63a6a711!8m2!3d36.8321808!4d10.1861941!15sCgVVdGljYZIBC2xhYm9yX3VuaW9u4AEA!16s%2Fg%2F1hdz0yzmm?entry=ttu"
                            target="_blank"
                        >
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                width={500}
                                height={500}
                                src="/UTICA Google Maps.png"
                                alt="UTICA Google Maps"
                                priority={true}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </a>
                    </div>


                </div>



                <h1 className="text-center mt-8 mb-6 font-bold text-2xl sm:text-3xl text-gray-900">
                    Notre équipe
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-52 mx-auto" />
                </h1>

                <ul role="list" className="mx-auto w-full sm:w-2/6 md:w-1/2 lg:w-2/6 divide-y divide-gray-300 dark:divide-gray-300">

                    <li className="py-3 sm:py-4">
                        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                            <div className="flex-shrink-0 mb-2 sm:mb-0">
                                <Image className="w-32 h-32 rounded-full" src="/wahiba.jpeg" alt="Wahiba image" width={400} height={400} priority={true} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h1 className="text-2xl font-bold sm:text-base">
                                    Business Development Manager

                                </h1>
                                <h1 className="text-xl font-bold sm:text-base">
                                    Commissaire du Salon
                                </h1>
                                <p className="text-sm font-semibold text-gray-900 truncate ">
                                    Wahiba Ben Ali
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    contact@sds-expo.com
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    +216 29 36 22 55
                                </p>
                            </div>
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  dark:text-green-300">
                                <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            </span>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4">
                        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                            <div className="flex-shrink-0 mb-2 sm:mb-0">
                                <Image className="w-32 h-32 rounded-full" src="/Kacem.jpg" alt="kacem image" width={400} height={400} priority={true} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h1 className="text-xl font-bold sm:text-base">
                                    Directeur Technique
                                </h1>
                                <p className="text-sm font-semibold text-gray-900 truncate ">
                                    Kacem Berkhais
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    contact@sds-expo.com
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    +216 29 36 22 56
                                </p>
                            </div>
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  dark:text-green-300">
                                <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            </span>
                        </div>
                    </li>

                    <li className="py-3 sm:py-4">
                        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                            <div className="flex-shrink-0 mb-2 sm:mb-0">
                                <Image className="w-32 h-32 rounded-full" src="/habib.png" alt="habib image" width={400} height={400} priority={true} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h1 className="text-xl font-bold sm:text-base">
                                    Support It
                                </h1>
                                <p className="text-sm font-semibold text-gray-900 truncate ">
                                    Habib Razek
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    contact@sds-expo.com
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    +216 29 36 22 24
                                </p>
                            </div>
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  dark:text-green-300">
                                <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            </span>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    );
};

export default page;
