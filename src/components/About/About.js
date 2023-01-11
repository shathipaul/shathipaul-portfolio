import React from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';


const About = () => {
    return (
        <div id='about' className="hero absolute-center">
            <div className="hero-content flex-col lg:flex-row justify-between">
                <AboutLeft />
                <div className='max-w-lg ml-7'>
                    <AboutRight />
                </div>
            </div>
        </div>
    );
};

export default About;