import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";

const experiences = [
    {
        job: 'Front-End Developer',
        company: 'Alex Apps',
        date: '2022 - Present',
        responsibilities: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
        ],
    },
    {
        job: 'Course Instructor',
        company: 'Nucamp',
        date: '2022 - Present',
        responsibilities: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
        ],
    },
    {
        job: 'Course Instructor',
        company: 'Nucamp',
        date: '2022 - Present',
        responsibilities: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
        ],
    },
]

const AllExperience = () => {
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between'>
            {experiences.map((experience, index) => {
                return (
                    <>
                        <SingleExperience key={index} experience={experience} />
                        {index < 2 ? <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' /> : ""}
                    </>
                );
            })}
        </div>
    )
}

export default AllExperience
