// components/ImageList.js
import Image from 'next/image';
import React from 'react';

const ExpoList = () => {
    const images = [
        'fedex.png',
        'vectorys.png',
        'gs1.png',
        'poste.png',
        'scantech.png',
        'stam.png',
        'douane.png',
        'ast.png',
        'utc.png',
        'virtualdev.png',
        'pack tec.png',
        'login.png',
        'info net.png',
        'shipping log.png',
        'ami.png',
        'dropex.png',
        'abridia.png',
        'agence tunisienne de la formation proffesionelle.png',
        'aneti.png',
        'bako.png',
        'leanios.png',
        'navex.png',
    ];
    const expoData = [
        { src: 'tunisair.png', url: 'https://www.tunisair.com/en-tn' },
        { src: 'topnet.png', url: 'https://www.topnet.tn/' },
        { src: 'tijari.png', url: 'https://www.attijaribank.com.tn/' },
        { src: 'telecom.png', url: 'https://www.tunisietelecom.tn/particulier/' },
        { src: 'messina.png', url: 'https://www.messinaline.it/' },
        { src: 'fedex.png', url: 'https://www.fedex.com/' },
        { src: 'vectorys.png', url: 'https://www.vectorys.com/' },
        { src: 'gs1.png', url: 'https://www.gs1.org/' },
        { src: 'poste.png', url: 'https://www.poste.tn/' },
        { src: 'douane.png', url: 'https://www.douane.gov.tn/' },
        { src: 'ast.png', url: 'https://www.ast.com.tn/index.html' },
        { src: 'utc.png', url: 'https://www.universitecentrale.net/fr/' },
        { src: 'virtualdev.png', url: 'https://virtualdev.tn/en-gb/' },
        { src: 'delta.png', url: 'https://deltaexpressline.com/' },
        { src: 'pack tec.png', url: 'https://www.packtec.tn/' },
        { src: 'login.png', url: 'https://www.log-in.tn//' },
        { src: 'info net.png', url: 'https://www.infonet.com.tn/' },
        { src: 'provision.png', url: 'http://www.provision.com.tn/' },
        { src: 'shipping log.png', url: 'https://www.shippinglog.tn/' },
        { src: 'ami.png', url: 'https://www.assurancesami.com/fr/' },
        { src: 'dropex.png', url: 'https://droppex.com/#/home' },
        { src: 'abridia.png', url: 'https://abridia.com/insurance/solutions/' },
        { src: 'agence tunisienne de la formation proffesionelle.png', url: 'http://www.atfp.tn/' },
        { src: 'aneti.png', url: 'https://www.emploi.nat.tn/' },
        { src: 'bako.png', url: 'https://bakomotors.com/home/' },
        { src: 'leanios.png', url: 'https://www.leanios.com/' },
        { src: 'navex.png', url: 'https://navex.tn/' },

    ];



    return (
        <div className="flex flex-col items-center space-y-8 bg-gray-100 py-12">
            <h1 className="text-4xl font-bold text-red-600 uppercase tracking-wider mb-4"> @SDS EXPO 2023 </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 w-9/12 mx-auto px-8">
                {expoData.map((expo, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <a href={expo.url} target="_blank" rel="noopener noreferrer">
                            <Image src={`/${expo.src}`} alt={expo.src} layout="responsive" width={400} height={400} className="transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpoList;
