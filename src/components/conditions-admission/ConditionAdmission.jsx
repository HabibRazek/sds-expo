import Link from 'next/link'
import React from 'react'

const ConditionAdmission = () => {
    return (
        <div>

            <div>
                <div className="banner-container p-4 md:p-8">
                    <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
                        Condition d&apos;admission
                        <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
                    </h1>
                    <div>
                        <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white"><Link className='underline underline-offset-1 mx-2' href='/'>Accueil</Link> /
                            <Link className='underline underline-offset-1 mx-2' href="/politique-admission" >Condition d&apos;admission</Link> </h1>
                    </div>
                </div>
            </div>

            <div className='w-9/12 mb-8 px-4 py-3 mx-auto mt-8 bg-gray-100 rounded shadow-lg'>
    <div className="conditionAdmissionContainer">

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">CONDITION  D&apos;ADMISSION - SDS EXPO 2023</h2>

        <section className="presentation mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Présentation :</h3>
            <p className="text-gray-600">
                <strong>SDS EXPO 2023</strong>, aussi connu sous le nom de <strong>SUPPLY CHAIN & DELIVERY SERVICES EXHIBITION</strong>, est l&apos;événement économique majeur pour la communauté logistique et tous les acteurs de la chaîne d’approvisionnement, de la manutention, du stockage et du service de livraison du dernier kilomètre &apos;last door delivery&apos;. C&apos;est une plateforme dédiée à la mise en avant des dernières tendances, des meilleures pratiques et des innovations du secteur.
            </p>
        </section>

        <section className="datesAndLocation mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Dates & Lieu :</h3>
            <ul className="list-disc pl-5 text-gray-600">
                <li>01 Novembre 2023</li>
                <li>02 Novembre 2023</li>
            </ul>
            <p className="text-gray-600"><strong>Lieu</strong> : Centre international des congrès de l’UTICA</p>
        </section>

        <section className="dataProtection mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Protection des données :</h3>
            <p className="text-gray-600">
                Toutes les informations personnelles que vous nous fournissez lors de l&apos;utilisation de ce site web seront traitées conformément à notre Politique de Confidentialité.
            </p>
        </section>

        <section className="hyperlinks mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Liens hypertextes :</h3>
            <p className="text-gray-600">
                Nos sites web peuvent fournir des liens vers des sites web tiers pour votre commodité. Si vous accédez à ces liens, vous quitterez notre site web. Nous ne contrôlons pas ces sites web ni leurs pratiques légales, qui peuvent différer des nôtres. Nous n&apos;approuvons ni ne faisons de déclarations au sujet des sites web tiers. Ces Termes et Conditions ne couvrent pas votre interaction avec les sites web tiers, et nous vous encourageons à consulter les Termes et Conditions de tout site web tiers avant d&apos;y accéder.
            </p>
        </section>

        <section className="contact mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Contact :</h3>
            <ul className="list-disc pl-5 text-gray-600">
                <li><strong>Email</strong> : <a href="mailto:contact@sds-expo.com" className="text-blue-500 underline">contact@sds-expo.com</a></li>
                <li><strong>Téléphone</strong> : +216 29 36 22 55</li>
                <li><strong>Dates</strong> : 01 et 02 Novembre 2023</li>
                <li><strong>Lieu</strong> : Centre international des congrès de l’UTICA</li>
            </ul>
        </section>

        <footer className="border-t pt-3">
            <p className="text-gray-600">
                En vous inscrivant à SDS EXPO 2023, vous acceptez les termes et conditions mentionnés ci-dessus.
            </p>
        </footer>
    </div>
</div>

        </div>

    )
}

export default ConditionAdmission