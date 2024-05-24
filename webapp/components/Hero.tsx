"use client";
import React from 'react'
import { SparklesCore } from './ui/sparkles';
const Hero = () => {
    return (
        <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <h1 className="md:text-7xl text-3xl mx-2 lg:text-6xl font-bold text-center text-white relative z-20">
                Build Great Docs
            </h1>
            <p className='md:text-3xl text-xl mx-2 lg:text-2xl text-center text-white relative z-20'>Don't waste time with  <span className='font-bold'>docs</span> when you can <span className='font-bold'>code</span>.</p>
        </div>
    )
}

export default Hero