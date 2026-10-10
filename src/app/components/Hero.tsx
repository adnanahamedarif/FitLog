import React from 'react';
import Banner from '@/assets/banner.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="bg-black text-white min-h-[650px] flex items-center justify-center px-4 py-6">
            <div className="w-full max-w-7xl bg-[#111318] border border-gray-800 rounded-3xl p-6 lg:p-14 flex flex-col lg:flex-row-reverse items-center justify-between gap-10 shadow-2xl">

                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image src={Banner} alt="FitLog Banner" className="max-w-full h-auto object-contain"/>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <span className="text-xs uppercase tracking-widest text-[#ccff00] font-bold">
                        Workout Library
                    </span>
                    <h1 className="text-4xl lg:text-4xl font-black tracking-tight uppercase leading-none text-white">
                        Train with intent. Log every set.
                    </h1>
                    <p className="text-gray-400 text-base lg:text-lg max-w-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.
                    </p>
                    <div>
                        <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg">
                            Browse Workouts
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;