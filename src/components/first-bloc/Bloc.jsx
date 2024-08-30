import Image from "next/image";
import React from "react";

const Bloc = () => {
  return (
    <div className='max-w-screen-xl mb-8 px-4 py-3 mx-auto mt-8'>
      <div className="flex flex-col md:flex-row space-x-4 items-center">

        {/* Text (Right side) */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-extrabold mb-2 text-red-500">SDS EXPO 2024</h2>
          <p className="text-gray-600 text-justify">
            <span className="font-bold"> SDS EXPO 2024 </span>ou<span className="font-bold"> SUPPLY CHAIN & DELIVERY SERVICES EXIHIBITION ,</span> est le rendez-vous économique incontournable pour la communauté logistique et les différents acteurs de <span className="font-bold">la chaine d’approvisionnement</span> , de la <span className="font-bold">manutention</span> , du <span className="font-bold">stockage</span> et du service de livraison du dernier kilomètre &ldquo;<span className="font-bold">last door delivery</span>&ldquo; cherchant à se démarquer et se tenir informés des dernières tendances, des meilleures pratiques et des innovations du secteur.
          </p>
          <div>
            <p className="text-gray-600 mt-3 mb-4 text-justify">
              Ce salon a pour objectif majeur de rassembler les principaux acteurs économiques et les professionnels les plus influents pour présenter leurs meilleures offres de services ainsi que Leurs solutions en matière de :
            </p>
            <div className="order-2 md:order-1 mt-2 flex justify-between">
            <ul className="list-none text-gray-600 list-inside">
              <li className="mr-4">- Transport</li>
              <li className="mr-4">- Entreposage</li>
              <li className="mr-4">- Gestion du stock</li>
              <li className="mr-4">- Emballage</li>
            </ul>
            <ul className="list-none text-gray-600 list-inside">
              <li className="mr-4">- Gestion des flux de marchandise</li>
              <li className="mr-4">- Technologie</li>
              <li className="mr-4">- Automatisation</li>
              <li>- Mobilité et de livraison last door delivery</li>
            </ul>
          </div>
          </div>
        </div>

        {/* Image (Left side) */}
        <div className="md:w-1/2 mx-auto">
          <Image
            src="/supply-chain-management-transport-routier.jpg"
            alt="supply-chain-management-transport-routier"
            className="w-full h-auto mx-auto"
            width={400}
            height={400}
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>


  );
};

export default Bloc;
