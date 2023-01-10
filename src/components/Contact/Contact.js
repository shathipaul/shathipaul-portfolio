import React from 'react';
import img from '../../assets/images/undraw.png'

const Contact = () => {
    return (
        <div id='contact' className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
            <div className="flex flex-col justify-center">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <p className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</p>
                    {/* <img src={img} alt="" className="" /> */}

                </div>

            </div>
            <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-lg">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded required:" />
                </div>
                <div>
                    <label for="email" className="text-lg">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded required: " />
                </div>
                <div>
                    <label for="message" className="text-lg">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded "></textarea>
                </div>
                <button type="submit" className="btn btn-primary ">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;