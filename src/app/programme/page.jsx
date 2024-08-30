import Link from "next/link";
import React from "react";

const EventItem = ({ time, title, description }) => (
    <li className="mb-10 ml-4">
        <div className=" posi w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-red-600 dark:bg-red-600"></div>

        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {time}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">
            {title}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {description}
        </p>
    </li>
);

const DayEvents = ({ dayName, events }) => (
    <div className="mb-6 md:mb-0 md:pr-8">
        <h3 className="text-red-600 text-base sm:text-xl lg:text-2xl font-medium">
            {dayName}
        </h3>
        <ol className="border-l border-red-200 dark:border-red-700">
            {events.map((event, index) => (
                <EventItem key={index} {...event} />
            ))}
        </ol>
    </div>
);

const page = () => {
    const days = [
        {
            dayName: "Jour 1",
            events: [
                {
                    time: "08h00 - 10h00",
                    title: "ACCUEIL DES EXPOSANTS",
                    description: "Arrivée et accueil des exposants.",
                },
                {
                    time: "10h00 - 10h30",
                    title: " ENREGISTREMENT ET CÉRÉMONIE DE L'OUVERTURE OFFICIELLE",
                    description:
                        "Enregistrement des participants suivi de la cérémonie d ouverture officielle.",
                },
                {
                    time: "10h30 - 19h00",
                    title: "OUVERTURE DU SALON AU PUBLIC",
                    description:
                        "Les exposants présenteront leurs dernières innovations, équipements et technologies liés à la Supply Chain et aux Services de Livraison",
                },
                {
                    time: "10h30 - 19h00",
                    title: "DÉMARRAGE DES RENCONTRES B2B",

                    description:
                        "Espace B2B dédié pour une opportunité exceptionnelle de réseautage, de partenariat et d'échange d'idées au cœur de l'industrie.",
                },
                {
                    time: "11h00 - 13h00",
                    title:
                        "CONFÉRENCE 1 -  LA SUPPLY CHAIN FACE AUX ÉVOLUTIONS TECHNOLOGIQUES ",

                    description:
                        "Des orateurs experts, tant tunisiens qu'internationaux de renom, apporteront des éclairages essentiels sur les tendances actuelles et les innovations futures au sein de la supply chain. La session comprendra des échanges interactifs sous forme de questions-réponses",
                },
                {
                    time: "15h00 - 17h00",
                    title:
                        "CONFÉRENCE 2 -  EXPORTATION RÉUSSIE : LES CLÉS DE LA LOGISTIQUE, DE LA CONFORMITÉ ET DE LA TRAÇABILITÉ",

                    description:
                        "Des experts de renommée nationale et internationale partageront leurs connaissances essentielles sur les pratiques actuelles et les éléments clés de la logistique, de la conformité et de la traçabilité pour garantir le succès de vos exportations. La session sera interactive, offrant une opportunité précieuse pour poser des questions et échanger des idées.",
                },
            ],
        },
        {
            dayName: "Jour 2",
            events: [
                {
                    time: "10h00 - 18h00",
                    title: "OUVERTURE DU SALON AU PUBLIC (SUITE) ",

                    description:
                        "Les participants pourront explorer les stands des exposants, établir des contacts professionnels et échanger des idées.",
                },
                {
                    time: "10h00 - 18h00",
                    title: " RENCONTRES B2B (SUITE)",
                    description:
                        "Un moment privilégié pour les participants de tisser des liens professionnels, explorer de nouvelles collaborations et ouvrir la porte à de futures opportunités d'affaires.",
                },
                {
                    time: "11h00 - 13h00",
                    title:
                        "CONFÉRENCE 3 -  FORMATION UNIVERSITAIRE ET PROFESSIONNELLE DANS LE SECTEUR DE LA LOGISTIQUE EN TUNISIE : UN REGARD SUR LE MARCHÉ DU TRAVAIL ",
                    description:
                        "Explorez le paysage de la formation universitaire et professionnelle en logistique en Tunisie, en analysant comment il répond aux besoins du marché du travail. Cette  session vous permettra d'obtenir des informations essentielles sur l'alignement entre la formation et les opportunités professionnelles",
                },
                {
                    time: "16h00 - 18h00",
                    title:
                        "CONFÉRENCE 4 -  ÉCONOMIE TUNISIENNE EN MOUVEMENT : LES MÉCANISMES DE FINANCEMENT POUR RÉVOLUTIONNER LE SECTEUR DE LA LOGISTIQUE ",
                    description:
                        "Plongez dans le dynamisme de l'économie tunisienne et découvrez les mécanismes  de financement qui sont en train de transformer le secteur de la livraison du dernier kilomètre. Cette conférence explore les opportunités de financement qui stimulent l'innovation dans ce domaine clé",
                },
                {
                    time: "18h30 - 20h00",
                    title: "DELIVERY AWARDS & COCKTAIL DE REMISE DE PRIX ",
                    description:
                        "Cérémonie conviviale et annonce des lauréats pour récompenser les meilleures sociétés de livraison qui se sont distinguées par leur excellence et leurs performances  exceptionnelles. Un moment spécial pour célébrer les réussites des professionnels du métier et établir des liens avec les participants, les exposants et les lauréats",
                },
            ],
        },
    ];

    return (
        <div>
            <div className="banner-container p-4 md:p-8">
                <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
                    PROGRAMME
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                </h1>
                <div>
                    <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white">
                        <Link className="underline underline-offset-1 mx-2" href="/">
                            ACCEUIL
                        </Link>{" "}
                        /
                        <Link
                            className="underline underline-offset-1 mx-2"
                            href="/programme"
                        >
                            PROGRAMME
                        </Link>{" "}
                    </h1>
                </div>
            </div>

            <div className="w-3/5 max-w-screen-xl px-4 py-3 mx-auto">
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-red-600 font-semibold animate-bounce mt-8 mb-8">
                    PROGRAMME{" "}
                </h2>

                {days.map((day, index) => (
                    <DayEvents key={index} {...day} />
                ))}
            </div>

            <div className="text-center mb-4">
                <a
                    href="/Programme SDS Expo 2023.pdf"
                    download="Programme SDS Expo 2023.pdf"
                    className="bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 inline-block hover:bg-red-800 transition-transform transform hover:-translate-y-1 hover:scale-110"
                >
                    Télécharger le programme
                </a>
            </div>
        </div>
    );
};

export default page;
