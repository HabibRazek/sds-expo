import UserForm from '@/components/user-form/UserForm'
import React from 'react'

const page = () => {
    return (
        <div className='mt-8 w-4/6 px-4 py-3 mx-auto mb-8'>
            <head>
                {/* Open Graph (OG) meta data for Facebook */}
                <title>S&apos;inscrire | SDS EXPO</title>
                <meta property="og:title" content="S'inscrire | SDS EXPO" />
                <meta property="og:description" content="Inscrivez-vous pour accéder aux meilleures fonctionnalités de notre plateforme" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sds-expo.com/isncription" />
                <meta property="og:image" content="/SDS EXPO 2023.png" />
            </head>

            <h1 className="text-center mt-8 font-bold text-3xl text-gray-900">
                S&apos;inscrire
                <hr className="mt-2 border-red-600 border-solid border-t-4 w-60 mx-auto" />
            </h1>
            <UserForm />
        </div>
    )
}

export default page
