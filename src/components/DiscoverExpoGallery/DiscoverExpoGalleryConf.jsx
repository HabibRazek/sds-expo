import Link from 'next/link';
import DiscoverGalleryConf from './ConferenceCarousel';

const DiscoverExpoGalleryconf = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 ">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 underline  decoration-red-600">SDS EXPO 2023 CONFERENCES</h2>

            <DiscoverGalleryConf />

            
            <p className="text-gray-600 text-center my-6">
            Explorez notre galerie des conférences de SDS EXPO 2023 pour retrouver les moments clés des présentations inspirantes et des échanges enrichissants.            </p>
            <Link legacyBehavior href="/galerie" passHref>
                <a className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                    Visitez la Galerie
                </a>
            </Link>
        </div>
    );
};

export default DiscoverExpoGalleryconf;
