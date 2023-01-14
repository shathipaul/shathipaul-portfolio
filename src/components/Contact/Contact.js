import React from 'react';
import img from '../../assets/images/c.png'

const Contact = () => {
    return (
        <div id='contact' className="transparent grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
            <div className="flex flex-col justify-center ">
                <div className="space-y-2 ">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <p className="text-gray-300">I'm excited to learn about your project.</p>
                    <img src={img} alt="" className="w-3/5 lg:-ml-8" />

                </div>

            </div>
            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-md">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded required:" />
                </div>
                <div>
                    <label for="email" className="text-md">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded required: " />
                </div>
                <div>
                    <label for="message" className="text-md">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded "></textarea>
                </div>
                <button type="submit" className="btn btn-outline text-white hover:btn-warning ">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;