import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
    return (
        <div id='hero' className="hero absolute-center">
            <div className="hero-content flex-col lg:flex-row justify-between">
                <HeroLeft />
                <div className='max-w-lg ml-7'>
                    <HeroRight />
                </div>
            </div>
        </div>
    );
};

export default Hero;