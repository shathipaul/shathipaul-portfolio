import React from 'react';

const Projects = () => {
    const projects = [
        { id: 1, pName: 'Paw Care', pLink: 'https://paw-care-service.netlify.app/', tools: 'React, TailwindCSS,' },
        { id: 2, pName: 'The Book Spot', pLink: 'https://the-book-spot.netlify.app/', tools: 'React, TailwindCSS,' },
        { id: 3, pName: 'Learn Language', pLink: 'https://learn-language-service.netlify.app/', tools: 'React, TailwindCSS,' },
        { id: 4, pName: 'Yoga For Beginners', pLink: 'https://yoga-for-beginners.netlify.app/', tools: 'React, TailwindCSS,' },
        { id: 5, pName: 'Quicky Quiz', pLink: 'https://quicky-quiz.netlify.app/', tools: 'JavaScript, TailwindCSS, Toastify, HTML' },
        { id: 6, pName: 'Speed Tester', pLink: 'https://kaleidoscopic-empanada-733ed7.netlify.app/', tools: 'JavaScript, HTML, CSS' },
    ]
    return (
        <div id='projects'>
            <div className=" flex flex-wrap transparent max-w-screen-xl gap-8 px-8 py-16 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center ">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                            My Recent Projects
                        </h2>
                        <p className="text-gray-300 text-base">
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>

            <div className=' grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 lg:grid-cols-3 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100 -mt-32 '>
                {
                    projects.map(project => <div key={project.id}
                        className='bg-white rounded-lg text-black  mx-auto h-48 w-full flex flex-col justify-evenly items-center gap-3 '>
                        <div className='px-8 text-center'>
                            <h3 className='text-2xl font-semibold'>{project.pName}</h3>
                            <p className='text-lg'>Tools: {project.tools}</p>
                        </div>
                        <a href={project.pLink} target='blank' className="btn btn-outline btn-warning">View Project</a>
                    </div>)
                }

            </div>
            {/* <div className='flex mb-16 justify-center'>
                <a href='/' className="btn btn-outline text-white hover:btn-warning">View All Projects</a>

            </div> */}
        </div>
    );
};

export default Projects;