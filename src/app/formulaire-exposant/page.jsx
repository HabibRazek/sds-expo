import Link from 'next/link';
import React from 'react';


const Page = () => {
  return (
    <div>

      <div className="banner-container p-4 md:p-8">
        <h1 className="text-center mt-8 font-bold text-3xl mb-2 text-white">
        FORMULAIRE DE PARTICIPATION
          <hr className="mt-2 border-red-600 border-solid border-t-4 w-72 mx-auto" />
        </h1>
        <div>
          <h1 className="text-center mt-2 font-bold text-1xl mb-2 text-white"><Link className='underline underline-offset-1 mx-2' href='/'>ACCEUIL</Link> /
            <Link className='underline underline-offset-1 mx-2' href="/formulaire-exposant" >FORMULAIRE DE PARTICIPATION</Link> </h1>
        </div>
      </div>
      <div className='max-w-screen-xl mb-8 px-4 py-3 mx-auto mt-8'>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center sm:text-left">
          <p className="text-4xl mb-4 text-center font-bold">Formulaire de participation</p>
          <p className="mb-4 text-center">
            Ici, vous pouvez télécharger différents documents pour réserver un espace au SDS Expo. Pour plus d&apos;informations sur vos formulaires de participation, que ce soit en tant qu&apos;entreprise individuelle, co-exposant ou entreprise représentée, veuillez contacter :
          </p>
          <p className="font-semibold text-center">SDS EXPO </p>
          <p className="mb-1 text-center">
            E-mail :{' '}
            <a
              href="mailto:contact@sds-expo.com"
              className="text-red-600 hover:text-black hover:underline"
            >
            contact@sds-expo.com
            </a>
          </p>
          <p className="text-center">
            Tel. :{' '}
            <a
              href="tel:+21629362255"
              className="text-red-600 hover:text-black hover:underline"
            >
              +216 29 36 22 55
            </a>
          </p>
          <div className="text-center">
            <a
              href="/Demande%20de%20participation.pdf"
              download="Demande de participation.pdf"
              className="bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 inline-block hover:bg-red-800"
            >
              Télécharger la demande de participation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
