import Tbloc from "@/components/third-bloc/Tbloc";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="banner-container bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 mb-8 md:p-8">
    <h1 className="text-center mt-8 font-bold text-3xl md:text-5xl mb-2 text-white transition-transform transform hover:-translate-y-1 hover:scale-105">
      LES CONFÉRENCES
      <hr className="mt-2 border-red-600 border-solid border-t-4 w-3/4 md:w-72 mx-auto" />
    </h1>
    <div>
      <h1 className="text-center mt-2 font-bold text-lg md:text-xl mb-2 text-white">
        <Link className="underline  underline-offset-1 mx-2 hover:text-white" href="/">
          ACCEUIL
        </Link>{" "}
        /
        <Link
          className="underline  underline-offset-1 mx-2 hover:text-white"
          href="/les-conferences"
        >
          LES CONFÉRENCES
        </Link>{" "}
      </h1>
    </div>
  </div>
  
      <Tbloc />

      <div className="p-4 w-3/4 mx-auto bg-white shadow-lg rounded-lg">
        {/* Conference 1 */}
        <div className="mb-4 p-4 border-b-2 border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-600 ">
            CONFÉRENCE 1 - &quot;LA SUPPLY CHAIN FACE AUX ÉVOLUTIONS
            TECHNOLOGIQUES&quot;
          </h2>
          <p className="text-gray-500 mt-2">
            Des orateurs experts, tant tunisiens qu&apos;internationaux de
            renom, apporteront des éclairages essentiels sur les tendances
            actuelles et les innovations futures au sein de la supply chain. La
            session comprendra des échanges interactifs sous forme de
            questions-réponses.
          </p>
        </div>

        {/* Conference 2 */}
        <div className="mb-4 p-4 border-b-2 border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-600">
            CONFÉRENCE 2 - &quot;EXPORTATION RÉUSSIE : LES CLÉS DE LA
            LOGISTIQUE, DE LA CONFORMITÉ ET DE LA TRAÇABILITÉ&quot;
          </h2>
          <p className="text-gray-500 mt-2">
            Des experts de renommée nationale et internationale partageront
            leurs connaissances essentielles sur les pratiques actuelles et les
            éléments clés de la logistique, de la conformité et de la
            traçabilité pour garantir le succès de vos exportations. La session
            sera interactive, offrant une opportunité précieuse pour poser des
            questions et échanger des idées.
          </p>
        </div>

        {/* Conference 3 */}
        <div className="mb-4 p-4 border-b-2 border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-600">
            CONFÉRENCE 3 - &quot;FORMATION UNIVERSITAIRE ET PROFESSIONNELLE DANS
            LE SECTEUR DE LA LOGISTIQUE EN TUNISIE : UN REGARD SUR LE MARCHÉ DU
            TRAVAIL&quot;
          </h2>
          <p className="text-gray-500 mt-2">
            Explorez le paysage de la formation universitaire et professionnelle
            en logistique en Tunisie, en analysant comment il répond aux besoins
            du marché du travail. Cette session vous permettra d&apos;obtenir
            des informations essentielles sur l&apos;alignement entre la
            formation et les opportunités professionnelles.
          </p>
        </div>

        {/* Conference 4 */}
        <div className="mb-4 p-4">
          <h2 className="text-2xl font-semibold text-gray-600">
            CONFÉRENCE 4 - &quot;ÉCONOMIE TUNISIENNE EN MOUVEMENT : LES
            MÉCANISMES DE FINANCEMENT POUR RÉVOLUTIONNER LE SECTEUR DE LA
            LIVRAISON DU DERNIER KILOMÈTRE&quot;
          </h2>
          <p className="text-gray-500 mt-2">
            Plongez dans le dynamisme de l&apos;économie tunisienne et découvrez
            les mécanismes de financement qui sont en train de transformer le
            secteur de la livraison du dernier kilomètre. Cette conférence
            explore les opportunités de financement qui stimulent
            l&apos;innovation dans ce domaine clé.
          </p>
        </div>

        {/* Download Button */}
      </div>

      <div className="text-center mb-4">
        <p className="w-3/5 text-gray-600 mx-auto mt-8">
        N&apos;attendez plus ! Cliquez ici pour télécharger dès maintenant le dossier de présentation complet. Assurez-vous d&apos;avoir toutes les informations nécessaires pour votre participation réussie au SDS Expo. À bientôt !






        </p>
        <a
          href="/SDS EXPO 2023 Dossier de Présentation.pdf"
          download="SDS EXPO 2023 Dossier de Présentation.pdf"
          className="bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 inline-block hover:bg-red-800 transition-transform transform hover:-translate-y-1 hover:scale-110"
        >
          Télécharger le dossier de présentation
        </a>
      </div>
    </div>
  );
};

export default page;
