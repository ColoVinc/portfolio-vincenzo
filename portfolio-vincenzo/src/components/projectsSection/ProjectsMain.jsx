import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const projects = [
    {
        name: "Project #1",
        year: "Mar 2020",
        align: "right",
        image: "../../public/images/website-img-1.jpg",
        link: "#",
    },
    {
        name: "Project #2",
        year: "Mar 2021",
        align: "left",
        image: "../../public/images/website-img-2.webp",
        link: "#",
    },
    {
        name: "Project #3",
        year: "Mar 2022",
        align: "right",
        image: "../../public/images/website-img-3.jpg",
        link: "#",
    },
    {
        name: "Project #4",
        year: "Mar 2023",
        align: "left",
        image: "../../public/images/website-img-4.jpg",
        link: "#",
    }
]

const ProjectsMain = () => {
    return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4">
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0 }}>
                <ProjectsText />
            </motion.div>
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
                {projects.map((project, index) => {
                    return (
                        <SingleProject
                            key={index}
                            name={project.name}
                            year={project.year}
                            align={project.align}
                            image={project.image}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ProjectsMain