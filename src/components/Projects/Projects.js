import React from 'react';

const Projects = () => {
    const projects = [
        { id: 1, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 2, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 3, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 4, name: 'xyz', title: 'abchhhh', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 5, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 6, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
    ]
    return (
        <div id='projects'>
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                            Our Recent Projects
                        </h2>
                        <p className="text-body-color text-base">
                            There are many variations of passages of Lorem Ipsum available but
                            the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
            </div>

            {/* experiment */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-10'>
                {
                    projects.map(project => <div key={project.id} className="relative mb-12">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={project.link}
                                alt="portfolio"
                                className="w-full"
                            />
                        </div>
                        <div
                            className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg"
                        >
                            <span className="text-primary mb-2 block text-sm font-semibold">
                                {project.name}
                            </span>
                            <h3 className="text-dark mb-4 text-xl font-bold  text-black">
                                {project.title}
                            </h3>
                            <a href={project.detail}
                                className="btn-outline text-primary hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white">
                                View Details
                            </a>
                        </div>
                    </div>)
                }

            </div>
            <a href="/" className='btn-outline text-white hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white text-center w-2/12'>View All Projects</a>
        </div>
    );
};

export default Projects;