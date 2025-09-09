import { motion } from 'framer-motion';
import React from 'react';
function Resume()
{
const certificates =[
    {
        id:1,
        name:"Certified as AWS cloud Practitioner (CLF-02) ",
        year:2025,
        link:"https://www.hackerrank.com/certificates/0312fad9433d" 
    },
    {
        id:2,
        name:"Certified on Java in Hackerrank",
        year:2024,
        link:"https://www.hackerrank.com/certificates/0312fad9433d" 
    },
    {
        id:3,
        name:"Certified on Python in Hackerrank",
        year:2024,
        link:"https://www.hackerrank.com/certificates/c333f8326375" 
    },
    {
        id:4,
        name:"Certified on Problem - solving in Hackerrank",
        year:2024,
        link:"https://www.hackerrank.com/certificates/7db0f2b8deb8" 
    },
    {
        id:5,
        name:"Certified on Fundamentals of HTML and CSS by EDx",
        year:2024,
        link:"https://www.hackerrank.com/certificates/7db0f2b8deb8" 
    }
    
]

const Achievements =[
    {
        id:1,
        name:"Qualified in CS GATE-2025",
        year :"2025",
        link:"#",
    },
    {
        id:2,
        name:"3 prizes in Web Designing",
        year :"RIPPLE-2k25 (1st), RIPPLE-2k24 (2nd) , CS Engineers Day-2024 (3rd) ",
        link:"#",
    },
      {
        id:3,
        name:"3rd Prize in Code-X (coding)",
        year :"2025",
        link:"#",
    },
    {
        id:4,
        name:"solved 160+ problems in Leetcode",
        year :"2025",
        link:"https://leetcode.com/u/boyaravikumar42/",
    },
    {
        id:5,
        name:"5 star on java in Hackerrank",
        year :"2024",
        link:"https://www.hackerrank.com/profile/boyaravikumar42",
    },

]

    return (
          <section className="resume" id="resume">
        <h2 className="heading"> <span>Res</span>ume</h2>
        <div className="resume-container">
            <div className="row">
                <div className="title">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}       
                    whileInView={{ opacity: 1, x: 0 }}         
                    transition={{ duration: 1 }} 
                    >Education</motion.h1>
                </div>
                <div className="education skills-wrap">
                    <div>
                        <motion.div
                        // initial={{ opacity: 0, x: 100 }}       
                        // whileInView={{ opacity: 1, x: 0 }}         
                        // transition={{ duration: 1 }} 
                         className="item">
                            <div className="content">
                                <h2><span>Bachelor Of Technology - CSE</span></h2>
                                <h3><i>2022 - 2026</i></h3>
                                <p>Rajeev Gandhi Memorial college Of Engineering And Technology, Nandyal (Autonomous)</p>
                                <h3><i>CGPA : 9.1</i></h3>
                                </div>
                        </motion.div>

                        <motion.div
                        initial={{ opacity: 0, x: 100 }}       
                            whileInView={{ opacity: 1, x: 0 }}         
                            transition={{ duration: 1 }}
                         className="item">  
                            <div className="content">
                                <h2><span>Intermediate - MPC</span></h2>
                            <h3><i>2020 - 2022</i></h3>
                            <p>AP Model Junior College, Aspari</p>
                            <h3><i>Marks : 777<span> / </span>1000</i></h3>
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="title">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}       
                        whileInView={{ opacity: 1, x: 0 }}         
                        transition={{ duration: 1 }} 
                    >Certifications</motion.h1>
                </div>
                <div className="skills-wrap">
                    <div
                        
                    >
                        {certificates.map((e)=><Certifications key={e.id} id={e.id}name={e.name} year={e.year} link={e.link}/>)}
                    </div>   
                </div>
            </div>
            <div className="row">
                <div className="title">
                    <motion.h1
                    initial={{ opacity: 0, x: -100 }}       
                        whileInView={{ opacity: 1, x: 0 }}         
                        transition={{ duration: 1 }} 
                    >Achievements</motion.h1>
                </div>
                <div
                 className="skills-wrap">
                                {Achievements.map((e)=><Certifications key={e.id} id={e.id}name={e.name} year={e.year} link={e.link}/>)}      
                </div>
            </div>

        </div>

    </section>
    )
}
export default Resume;

function Certifications({id,name,year,link})
{
    return ( 
            <motion.div 
                        // initial={{ opacity: 0, x: 100 }}       
                        // whileInView={{ opacity: 1, x: 0 }}         
                        // transition={{ duration: 1 }} 
                className="item">
                       <div className="content">
                        <div className="link">
                            <h3>{name}</h3>
                            <a href={link}><i className="fa-solid fa-link"></i></a>
                        </div>
                        <p>In {year}</p>
                       </div>
        </motion.div>
    )
}