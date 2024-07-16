import React from 'react';
import './Carousel.css'

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 font-sans">
            <div className="text-2xl font-bold text-black mb-4">
                Become a <span className="text-blue-600">Data Scientist</span> with Ladder7
            </div>
            <div className="flex items-center mb-5">
                <input
                    type="text"
                    className="w-96 h-10 rounded-full border-none bg-gray-300 px-5 text-base"
                    placeholder="search"
                />
                <button className="h-10 text-[12px] font-medium rounded-full border-none bg-black text-white px-5 ml-2 cursor-pointer w-24">
                    Find Jobs
                </button>
            </div>
        </div>
    );
};

const JobCard = ({ title, experience }) => {
    return (
        <div className="w-48 border border-gray-300 h-72 rounded-lg overflow-hidden shadow-md bg-white flex flex-col items-start p-2.5 m-7.5 text-left">
            <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-2.5"></div>
            <div className="bg-yellow-500 text-black rounded-full px-3.5 py-1 text-sm self-start my-1">
                Experience: {experience}
            </div>
            <div className="text-xl font-bold mt-2.5 text-black flex items-center justify-center w-full">
                {title} <span className="inline-block transform rotate-[330deg] ml-2.5 my-1 relative top-[-3px]">&#8594;</span>
            </div>
        </div>
    );
};

const Carousel = () => {
    const jobs = [
        { title: 'Data Analyst', experience: 'Beginner' },
        { title: 'Software Engineer', experience: 'Intermediate' },
        { title: 'Product Manager', experience: 'Expert' },
        { title: 'Data Scientist', experience: 'Beginner' },
        { title: 'Backend Developer', experience: 'Intermediate' },
        { title: 'Frontend Developer', experience: 'Expert' },
        { title: 'QA Engineer', experience: 'Beginner' },
        { title: 'DevOps Engineer', experience: 'Intermediate' },
        { title: 'Machine Learning Engineer', experience: 'Expert' },
        { title: 'Business Analyst', experience: 'Beginner' },
        { title: 'Project Manager', experience: 'Intermediate' },
        { title: 'UI/UX Designer', experience: 'Expert' },
        { title: 'Network Engineer', experience: 'Beginner' },
        { title: 'System Administrator', experience: 'Intermediate' },
        { title: 'Database Administrator', experience: 'Expert' },
        { title: 'Cloud Architect', experience: 'Beginner' },
        { title: 'Cybersecurity Analyst', experience: 'Intermediate' },
        { title: 'IT Support Specialist', experience: 'Expert' },
        { title: 'Mobile App Developer', experience: 'Beginner' },
        { title: 'Solutions Architect', experience: 'Intermediate' },
    ];

   
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev} ><p >&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p >&gt;</p></button>
            <div className="product-container"  >
                {jobs.map((job, index) => (
                    <JobCard key={index} title={job.title} experience={job.experience} />
                ))}
            </div>
        </div>
    );
};

const JobsList = () => {
    return (
        <div className="border border-red-500">
            <Hero />
            <Carousel />
        </div>
    );
};

export default JobsList;
