import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BadgeSignUp = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-6   space-y-4">
                <h1 className="text-2xl font-bold text-center text-gray-700">Inscrivez-vous pour avoir un badge</h1>
                <div className="max-w-screen-xl px-4 py-3 mx-auto text-center">
                <Link
                    href="/isncription"
                    className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-base "
                >
                    S&apos;inscrire
                </Link>
            </div>
                <Image className="w-32 h-32 object-cover" src="/sds expo badge.png" alt="Description of Image" width={200} height={200} 
                pirority="true"
                style={{width: 'auto', height: 'auto'}}    
            />
            </div>
        </div>
    )
}

export default BadgeSignUp