import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaWordpress } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';

const skills = [
    {
        skill: 'HTML',
        icon: FaHtml5,
    },
    {
        skill: 'CSS',
        icon: FaCss3Alt,
    },
    {
        skill: 'Javascript',
        icon: IoLogoJavascript,
    },
    {
        skill: 'Wordpress',
        icon: FaWordpress,
    },
    {
        skill: 'PHP',
        icon: FaPhp,
    },
    {
        skill: 'ReactJS',
        icon: FaReact,
    },
    {
        skill: 'Bootstrap',
        icon: FaBootstrap,
    },
    {
        skill: 'TailwindCSS',
        icon: RiTailwindCssFill,
    },
]

const AllSkills = () => {
    return (
        <div>
            <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
                {skills.map((item, index) => {
                    return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} /> 
                })}
            </div>
        </div>
    )
}

export default AllSkills
