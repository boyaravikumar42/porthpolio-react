import { motion } from 'framer-motion';
import React from 'react';
function Skills()
{
    const skills = [
        {
            id:1,
            name:"Java",
            perctg:90,
        },
        {
            id:2,
            name:"Python",
            perctg:85,
        },
        {
            id:3,
            name:"OOPS (java)",
            perctg:90,
        },
        {
            id:4,
            name:"Datastructures & Algorithms",
            perctg:85,
        },
        {
            id:9,
            name:"SpringBoot, REST API's",
            perctg:85,
        },
        {
            id:5,
            name:"React JS ",
            perctg:85,
        },
        {
            id:6,
            name:"HTML, CSS, Javascript",
            perctg:90,
        },
        {
            id:7,
            name:"mySQL, MongoDB",
            perctg:80,
        },
         {
            id:8,
            name:"Django",
            perctg:75,
        }
       
    ]
    return (
        <section className="skills"id="skills">
        <h2 className="heading">My <span>skills</span></h2>
        <div className="skill-wrapper">
            {skills.map((e)=><Bar id={e.id} name={e.name} perctg={e.perctg} key={e.id}/>)}
        </div>
     </section>
    )
}

function Bar({id,name,perctg})
{
    return(
        <motion.div
            initial={{ opacity: 0, x: -100 }}       
            whileInView={{ opacity: 1, x: 0 }}         
            transition={{ duration: 1 }} 
         className="skill-bar">
            <div className="skill-info">
                <p>{name}</p>
                <p>{perctg}%</p>
            </div>
            <div className="bar">
                <span style={{width:`${perctg}%`}}></span>
            </div>
        </motion.div>
    )
}
export default Skills;