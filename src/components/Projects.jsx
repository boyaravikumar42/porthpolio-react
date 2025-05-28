import { motion } from 'framer-motion';
import React from 'react';
function Projects()
{
    const cards=[
        {
            id:1,
            name:"",
            desc:["abc","def","jkl"],
            live:"",
            code:"",
            img:""
        },
        {
            id:2,
            name:"Porth polio Hub",
            desc:["Developed a portpolio website to showcase my skills in front-end",
                "ensured a responsive layout for optimal user experience across devices, using CSS media queries and flexible layout",
                "Added dynamic elements, smooth scrolling and animations using JavaScript"
                 ],
            live:"https://boyaravikumar42.github.io/porth-polio/",
            code:"https://github.com/boyaravikumar42/porth-polio",
            img:"./assets/porth.png"
        },
        {
            id:3,
            name:"Student clubs (CISC)",
            desc:["Designed a website to describe student clubs of CSE Deparment for interaction of students",
                "Developed using modern web technologies like HTML, CSS and JavaScript",
                "the project focuses on delivering a user-friendly and responsive interface."],
            live:"https://boyaravikumar42.github.io/cisk/",
            code:"https://github.com/boyaravikumar42/cisk",
            img:"./assets/cisc.png"
        },
        {
            id:4,
            name:"Mini Calculator",
            desc:["Developed a mini calculator to perform basic arithematic operations",
                "Layout and design was developed by using HTML and CSS",
                "The functionalities of calculator such as arithmatic operations implemented using Javascript"],
            live:"#",
            code:"https://github.com/boyaravikumar42/mini-calculator",
            img:"./assets/calc.png"
        }

    ]
    return (
        <section className="proj" id="proj">
    <h2 className="heading">Latest <span>Projects</span></h2>
    <div className="proj-wrap">
        {cards.map((e)=><Card key={e.id} name={e.name} desc={e.desc} live={e.live} code={e.code} img={e.img}/>)}
    </div>
</section>

    )
}
export default Projects;


function Card({name,desc,live,code,img})
{
    return(
        <motion.div 
                    initial={{ opacity: 0, x: -100 }}       
                    whileInView={{ opacity: 1, x: 0 }}         
                    transition={{ duration: 1 }} 
        className="card">
            <div className="proj-img">
                <img src={img || "ns.jpeg"} alt=""/>
            </div>
            <h2>{name}</h2>
            <ul>
                <li>{desc[0]}</li>
                 <li>{desc[1]}</li>
                 <li>{desc[2]}</li>
            </ul>
            <div className="btns">
                <a href={code} className="btn">github</a>
                <a href={live} className="btn live">live</a>
            </div>
        </motion.div>
    )
}