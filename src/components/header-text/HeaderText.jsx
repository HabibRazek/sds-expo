import React from 'react';
import Link from 'next/link';
import { MdDateRange } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const HeaderText = () => {
    return (
        <div className="max-w-screen-xl px-4 py-3 mx-auto mt-3">

            <h3 className="text-white  font-extrabold text-6xl ">
                SDS EXPO 2024
            </h3>
            <h3 className="text-white font-bold text-4xl  mt-2">
                Sous le théme:
            </h3>
            <h3 className="text-white font-bold text-2xl  sm:w-[700px]  mt-2">
                LES VOIES DU CHANGEMENT : STRATÉGIES LOGISTIQUES POUR UN AVENIR DURABLE, SOCIAL ET INNOVANT
            </h3>

            <div className="flex items-center  p-2">
                <div className="flex items-center mr-4">
                    <MdDateRange className="text-white text-7xl" />
                    <span className="text-white text-2xl font-bold ml-2">DATE: <br /> 23 & 24 Octobre 2024</span>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-white text-7xl" />
                    <span className="text-white text-2xl font-bold ml-2">LIEU:<br /> UTICA, Tunis</span>
                </div>
            </div>
            <div className="max-w-screen-xl px-4 py-3 mt-5">
                <Link
                    href="/isncription"
                    className="text-black bg-white  rounded-full font-extrabold px-5 py-3 mr-12 text-center text-xl "
                >
                    Nous Joindre
                </Link>
            </div>
            <p className='text-black font-bold text-xl mt-5'>
                +216 29 362 255| contact@sds-expo.com.com | www.sds-expo.com
            </p>

        </div>
    );
};

export default HeaderText;
