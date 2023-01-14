import React from 'react';

const AboutLeft = () => {
    // const states = [
    //     { id: 1, count: '200k', label: 'Collection' },
    //     { id: 2, count: '10k', label: 'Artists' },
    //     { id: 3, count: '423k', label: 'Community' }
    // ];
    return (
        <div className='flex-col lg:w-[45%]'>
            <h1 className='text-3xl md:text-4xl'>
                Hi, This is Shathi Paul
            </h1>
            <p className='my-4 text-gray-300 lg:w-4/5'>
                a freelance Front-end Developer from Dhaka, Bangladesh. As a developer,  have a working knowledge of JavaScript, React, Node, and MongoDB. I'm seeking opportunities to work with companies, agencies or individuals.
            </p>

            <button className="btn btn-outline hover:btn-warning text-white mr-5">Hire me</button>
            <button className="btn btn-warning">Resume</button>

            {/* <div className='flex mt-5'>
                {
                    states.map(state => <div className='mr-5 '
                        key={state.id}>
                        <div className='text-2xl font-bold'>
                            {state.count}
                        </div>
                        <div className='text-lg'>
                            {state.label}
                        </div>
                    </div>)
                }

            </div> */}

        </div>
    );
};

export default AboutLeft;