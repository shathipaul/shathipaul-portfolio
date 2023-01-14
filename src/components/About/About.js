import React from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';


const About = () => {
    return (
        <div id='about' className="grid lg:grid-cols-2 gap-2 py-6 lg:py-12 absolute-center">
            <div className="hero-content lg:flex-row justify-between">
                <AboutLeft />
                <div className='max-w-lg ml-7 hidden lg:block'>
                    <AboutRight />
                </div>
            </div>
        </div>
    );
};

export default About;