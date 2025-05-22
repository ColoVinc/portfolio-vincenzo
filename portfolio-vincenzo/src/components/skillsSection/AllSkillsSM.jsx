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

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => {
        return <div key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-orange' />
            <p className='text-center mt-4 text-white'>{item.skill}</p>
        </div>
      })}
    </div>
  )
}

export default AllSkillsSM
