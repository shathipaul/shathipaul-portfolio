import React from 'react';
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'

const AboutRight = () => {
    const jss = [
        { id: 1, src: img1 },
        { id: 2, src: img4 },
        { id: 3, src: img2 },
        { id: 4, src: img3 },
    ]
    return (
        <div className='flex relative absolute-center justify-between pt-10'>
            <div className='flex flex-wrap rotate-45'>
                {
                    jss.map(js => <div className='h-44 w-44 m-1.5 overflow-hidden border-2 rounded-xl -rotate-45 absolute-center'
                        key={js.id}>
                        <img className='h-60 object-contain block' src={js.src} alt="" />
                    </div>)
                }

            </div>
        </div>
    );
};

export default AboutRight;