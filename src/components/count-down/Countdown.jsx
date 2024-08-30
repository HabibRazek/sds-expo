'use client'
import React, { useState, useEffect } from 'react';
import SubscribeEmail from './SubscribeEmail';
import styles from './CountDown.module.css'; 


const Countdown = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className={`${styles['count-down-container']} p-4 md:p-8`}>
            <div className="text-xl md:text-3xl text-center text-white font-semibold mb-6">Rejoignez nous dans :</div>
            <div className="font-semibold md:text-center">
                <strong className="text-white text-3xl flex flex-wrap justify-center">
                    <div className="w-1/4 md:w-auto px-4 mb-4 md:mb-0 text-center">
                        <div className="text-xl md:text-2xl">
                            {timeRemaining.days}
                        </div>
                        <div className="text-xl md:text-2xl">Jours</div>
                    </div>
                    <div className="w-1/4 md:w-auto px-4 mb-4 md:mb-0 text-center">
                        <div className="text-xl md:text-2xl">
                            {timeRemaining.hours}
                        </div>
                        <div className="text-xl md:text-2xl">Heures</div>
                    </div>
                    <div className="w-1/4 md:w-auto px-4 mb-4 md:mb-0 text-center">
                        <div className="text-xl md:text-2xl">
                            {timeRemaining.minutes}
                        </div>
                        <div className="text-xl md:text-2xl">Minutes</div>
                    </div>
                    <div className="w-1/4 md:w-auto px-4 text-center">
                        <div className="text-xl md:text-2xl">
                            {timeRemaining.seconds}
                        </div>
                        <div className="text-xl md:text-2xl">Secondes</div>
                    </div>
                </strong>
            </div>

            {/* subscribe with email*/}
            <SubscribeEmail />
        </div>



    );
};

export default Countdown;
