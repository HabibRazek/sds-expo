import Image from 'next/image'
import React from 'react'

const BarFooter = () => {
    return (
        <div className="bg-gray-900  flex items-center justify-center h-12 px-4 sm:px-6">
            <div className="flex items-center space-x-4">
                <div className="flex items-center">
                    <p className="text-sm text-gray-400 text-center">
                        © {new Date().getFullYear()}
                    </p>
                    <a href='https://kings-worldwide.business/fr/commerce-international-tunisie-2/' target="_blank" className=" p-2 rounded">
                        <Image src="/Kings Group.png" alt="Kings Group" width={30} height={30} priority={true} style={{ width: '30', height: '30' }} />
                    </a>
                    <p className='text-sm text-gray-400'>
                        All rights reserved.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default BarFooter