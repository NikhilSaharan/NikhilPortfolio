/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

import Music from '../assets/Music.png'
import expensetracker from '../assets/expensetracker.png'

import CartEase from '../assets/CartEase.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='E-Commerce Website' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={CartEase} alt="" />
            </a>}

            {title=='Online Music Player' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Music} alt="" />
            </a>}

            {title=='Expense Tracker' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={expensetracker} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Link</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'E-Commerce Website',
        description:'I created an E-Commerce website that providing a seamless shopping experience with features like product listings,user-friendly shopping cart,and a streamlined checkout process. Built in using React.js  for a dynamic experience, and Material-UI for a sleek, responsive design.',
        image: {CartEase},
        git:"https://cart-ease.vercel.app/",
        technologies:[ 'React.js, Redux, Material-UI', 'Javascript']
    },
    
    {
        title:'Online Music Player',
        description:'Developed a dynamic music player website that allows users to play, pause, skip to the next song, and go back to the previous song, enhancing the user experience for music enthusiasts. Technologies used - HTML, CSS, JavaScript',
        image: {Music},
        git:'https://online-music-player-ten.vercel.app//',
        technologies:['HTML' ,'CSS' , 'Javascript']
    },
    {
        title:'Expense Tracker',
        description:' Developed an interactive Expense Tracker web application aimed at optimizing financial management for users. This project significantly improved financial tracking and user experience. Technologies used - HTML, CSS, JavaScript',
        image: {expensetracker},
        git:"https://expense-tracker-xi-lovat.vercel.app/",
        technologies:[ 'HTML' ,'CSS' , 'Javascript']
    }
]

export default Projects