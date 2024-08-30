import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="transition-all duration-500 ease-in-out">
      <div className="banner-container p-4 md:p-8">
        <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
          DÉCOUVREZ LA SDS
          <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
        </h1>
        <div>
          <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white">
            <Link className="underline underline-offset-1 mx-2" href="/">
              ACCEUIL
            </Link>{" "}
            /
            <Link className="underline underline-offset-1 mx-2" href="/about">
              DÉCOUVREZ LA SDS
            </Link>{" "}
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="text-center mt-4">
          <h2 className="w-4/5 text-red-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase inline-block mb-8 mt-8 relative animate-bounce">
            meilleurs fournisseurs de solutions de service de livraison à
            domicile 2023
          </h2>
        </div>

        <div className="flex flex-col md:flex-row mx-8 p-4 shadow-lg rounded-lg">
          <div className="md:w-1/2 md:pr-4">
            <p className="text-gray-600 text-justify transition duration-500 hover:text-gray-900">
              Le «Delivery Awards » est l&apos;occasion pour célébrer les
              sociétés offrant le service de livraison &quot;Last Door
              Delivery&quot; qui ont su se démarquer dans un secteur en
              constante évolution.
            </p>
            <br />
            <p className="text-gray-600 text-justify transition duration-500 hover:text-gray-900">
              Nous metterons en avant les entreprises qui ont su s&apos;adapter
              aux besoins changeants des consommateurs, en offrant des solutions
              de livraison rapides, sécurisées et de haute qualité.
            </p>
            <br />
            <p className="text-gray-600 text-justify transition duration-500 hover:text-gray-900">
              Les ‘’Awards’’ seront décernés dans différentes catégories,
              reflétant les différents aspects de l&apos;activité de livraison,
              tels que la rapidité de livraison, la qualité du service,
              l&apos;innovation technologique, la gestion des retours, et bien
              d&apos;autres encore.
            </p>
          </div>

          <div className="md:w-1/2 mt-4 mx-6 md:mt-0">
            <Image
              src="/Red Gold Elegant Award.jpg"
              alt="Last door delivery SDS Expo"
              className="object-cover w-full h-auto mx-auto rounded-lg shadow-xl hover:shadow-2xl transition duration-500"
              width={400}
              height={400}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="w-3/5 p-4 md:p-4 rounded-lg mt-8 mx-auto shadow-lg bg-white hover:bg-gray-100 transition duration-500">
        <h2 className="text-center text-red-600 text-2xl font-semibold mb-4">
          Rejoignez-nous aux &quot;Delivery Awards&quot;
        </h2>

        <p className="text-gray-600 text-justify mb-4">
          Nous sommes convaincus que les ‘’Delivery Awards’’ contribueront à
          mettre en valeur l&apos;importance cruciale de la logistique et de la
          livraison dans le paysage économique Tunisien. En récompensant les
          meilleures sociétés de livraison, nous souhaitons encourager
          l&apos;excellence et l&apos;amélioration continue du secteur, tout en
          inspirant d&apos;autres entreprises à suivre leur exemple.
        </p>
        <p className="text-gray-600 text-justify mb-4">
          Nous vous invitons ainsi à assister à cette soirée prestigieuse, où
          nous célébrerons ensemble les réussites exceptionnelles des sociétés
          de services de livraison &quot;Last Door Delivery&quot; en Tunisie.
        </p>
        <p className="text-gray-600 text-justify mb-4">
          C&apos;est une occasion de reconnaître et de rendre hommage aux
          acteurs clés de cette filière, tout en renforçant les liens
          professionnels et en favorisant une collaboration fructueuse pour
          l&apos;avenir.
        </p>
        <p className="text-gray-600 text-justify mb-4">
          Rejoignez-nous aux &quot;Delivery Awards&quot; lors du SDS EXPO 2023
          pour célébrer l&apos;excellence dans le domaine de la livraison en
          Tunisie et être témoin des réussites remarquables de ces sociétés qui
          façonnent l&apos;avenir du domaine.
        </p>
        <div className="text-center w-full md:w-3/12 mx-auto">
          <Link href="/programme">
            <p className="bg-red-600 text-white py-2 px-2 md:px-4 rounded hover:bg-red-700 transition duration-300 transform hover:scale-105">
              Voir le programme
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
