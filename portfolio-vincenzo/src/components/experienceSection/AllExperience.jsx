import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

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
                        {index < 2 ? (
                            <motion.div
                                variants={fadeIn("right", 0.2)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: false, amount: 0 }}>
                                <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
                            </motion.div>
                        ) : (
                            ""
                        )}
                    </>
                );
            })}
        </div>
    )
}

export default AllExperience
