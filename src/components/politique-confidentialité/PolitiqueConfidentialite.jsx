import Link from 'next/link';
import React from 'react'

const PolitiqueConfidentialite = () => {
    return (

        <div>

        <div>
            <div className="banner-container p-4 md:p-8">
                <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
                Politique de Confidentialité
                    <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                </h1>
                <div>
                    <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white"><Link className='underline underline-offset-1 mx-2' href='/'>Accueil</Link> /
                        <Link className='underline underline-offset-1 mx-2' href="/politique-confidentialite" >Politique de Confidentialité</Link> </h1>
                </div>
            </div>
        </div>


        <div className="politiqueConfidentialiteContainer w-9/12 mb-8 px-4 py-3 mx-auto mt-8 bg-gray-100 rounded shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Politique de Confidentialité - SDS EXPO 2023</h2>
    
        <section className="collecteInformations mt-4">
            <h3 className="text-lg font-medium text-gray-700 mt-2 mb-1">Collecte des informations :</h3>
            <p className="text-gray-600">
                Nous recueillons des informations lorsque vous vous inscrivez sur notre site, participez à des concours, vous déconnectez ou lorsque vous vous connectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et éventuellement votre entreprise, département, et poste.
            </p>
        </section>
    
        <section className="utilisationInformations mt-4">
            <h3 className="text-lg font-medium text-gray-700 mt-2 mb-1">Utilisation des informations :</h3>
            <div className="text-gray-600">
                Toutes les informations que nous recueillons peuvent être utilisées pour :
                <ul className="list-disc pl-5">
                    <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
                    <li>Améliorer notre site Web.</li>
                    <li>Améliorer le service client et vos besoins de prise en charge.</li>
                    <li>Vous contacter par e-mail.</li>
                    <li>Organiser un concours, une promotion, ou un sondage.</li>
                </ul>
            </div>
        </section>
    
        <section className="protectionInformations mt-4">
            <h3 className="text-lg font-medium text-gray-700 mt-2 mb-1">Protection des informations :</h3>
            <p className="text-gray-600">
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
            </p>
        </section>
    
        <section className="cookies mt-4">
            <h3 className="text-lg font-medium text-gray-700 mt-2 mb-1">Cookies :</h3>
            <p className="text-gray-600">
                Nos cookies améliorent l&apos;accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l&apos;expérience d&apos;utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n&apos;est en aucune façon liée à des informations personnelles identifiables sur notre site.
            </p>
        </section>
    
        <section className="divulgationTiers mt-4">
            <h3 className="text-lg font-medium text-gray-700 mt-2 mb-1">Divulgation à des tiers :</h3>
            <p className="text-gray-600">
                Nous ne vendons, n&apos;échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tiers de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
            </p>
        </section>
    
        <footer className="border-t pt-3 mt-4">
            <p className="text-gray-600">
                En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
        </footer>
    </div>
    </div>
    );
}

export default PolitiqueConfidentialite