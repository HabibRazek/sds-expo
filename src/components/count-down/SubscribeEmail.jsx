import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubscribeEmail = () => {
  return (

    <div className="flex flex-col md:flex-row items-center justify-center md:center mt-8">
      <Image
        src="/9.png"
        alt="subscribe"
        width={100}
        height={100}
        priority={true}
        style={{ width: "auto", height: "auto" }}
      />
      <input
        type="email"
        id="email"
        className="py-2.5 px-4 md:mx-2 text-sm text-white bg-transparent border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-0 focus:border-white-600 placeholder-white"
        placeholder="Votre adresse email ..."
      />
      <Link href="/isncription" className="mt-4 md:mt-0 mx-2 md:mx-0 bg-white text-black py-2 px-4 rounded-r-lg hover:bg-white-700 focus:outline-none focus:ring focus:ring-white-300">
        Rejoignez nous
      </Link>
    </div>
  )
}

export default SubscribeEmail