import Image from 'next/image';
import React from 'react';

const Bar = () => {
    const whatsappNumber = '+21650095115';
    const handleClick = () => {
        window.location.href = `tel:${whatsappNumber}`;
    };

    return (
        <div className="bg-gray-900 text-white flex items-center justify-between h-20 px-4 sm:px-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Social media icons */}
                <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                >
                    <svg
                        className="w-6 h-6 sm:w-5 sm:h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100094227490646"
                    target="_blank"
                    className="text-gray-300 hover:text-white transition duration-300"
                >
                    <Image
                        src="/icon1.png"
                        alt="facebook"
                        width={36}
                        height={36}
                        priority={true}
                        className="sm:w-30 sm:h-30"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/company/sds-expo/"
                    className="text-gray-300 hover:text-white transition duration-300"
                    target="_blank"
                >
                    <Image
                        src="/icon2.png"
                        alt="linkedin"
                        width={36}
                        height={36}
                        priority={true}
                        className="sm:w-30 sm:h-30"
                    />
                </a>
                <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                    target="_blank"
                    onClick={handleClick}
                >
                    <Image
                        src="/icon3.png"
                        alt="watsapp"
                        width={36}
                        height={36}
                        priority={true}
                        className="sm:w-30 sm:h-30"
                    />
                </a>
                <a
                    href="https://www.instagram.com/sdsexpo/"  // Replace with your Instagram handle or page
                    target="_blank"
                    className="text-gray-300 hover:text-white transition duration-300"
                >
                    <Image
                        src="/icon4.png"  // Assuming you've named your Instagram icon as "icon4.png"
                        alt="Instagram"
                        width={36}
                        height={36}
                        priority={true}
                        className="sm:w-30 sm:h-30"
                    />
                </a>
            </div>
            <div className="text-gray-300 mx-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 sm:space-x-2">
                    <Image src="/email.png" width={20} height={20} alt="Email Icon" priority={true} />
                    <span className="text-xs sm:text-sm">contact@sds-expo.com</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-2">
                    <Image src="/telephone.png" width={20} height={20} alt="Phone Icon" priority={true} />
                    <span className="text-xs sm:text-sm">+216 29 36 22 55</span>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Bar;
