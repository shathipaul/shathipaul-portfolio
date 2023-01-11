import React from 'react';

const AboutLeft = () => {
    const states = [
        { id: 1, count: '200k', label: 'Collection' },
        { id: 2, count: '10k', label: 'Artists' },
        { id: 3, count: '423k', label: 'Community' }
    ];
    return (
        <div className='flex-col'>
            <h1 className='text-7xl heading-gradient'>
                Shathi Paul
            </h1>
            <p className='my-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam similique est <br /> voluptate numquam laborum asperiores qui neque mollitia cupiditate distinctio.
            </p>

            <button className="btn btn-primary mr-5">Hire me</button>
            <button className="btn btn-outline btn-secondary">Resume</button>

            <div className='flex mt-5'>
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

            </div>

        </div>
    );
};

export default AboutLeft;