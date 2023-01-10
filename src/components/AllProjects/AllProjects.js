import React from 'react';

const AllProjects = () => {
    const projects = [
        { id: 1, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 2, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 3, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 4, name: 'xyz', title: 'abchhhh', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 5, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
        { id: 6, name: 'xyz', title: 'abc', link: 'https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg', detail: 'ghjk' },
    ]
    return (
        <div className=''>
            {
                projects.map(project => <div key={project.id} className="card card-side shadow-xl">
                    <figure><img src={project.link} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{project.title}</h2>
                        <p>{project.name}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">{project.detail}</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AllProjects;