import { motion } from 'framer-motion';
import React from 'react';
function Projects()
{
    const cards = [
  {
    id: 1,
    name: "AI Powered Quiz Generator",
    desc: [
      "Implemented quiz generation based on topic/document, difficulty level, and question count with AI support",
      "Enabled user participation via access code and username along with real-time leaderboard and tie-breaker scoring",
      "Designed admin features for scheduling quizzes, monitoring live scores, and publishing results"
    ],
    live: "#", // add your live link here
    code: "https://github.com/boyaravikumar42/Quiz-App-with-Gemini-API", // update if needed
    img: "./assets/quiz.jpg",
    skills: ["React", "Spring Boot", "MongoDB", "AI Integration"]
  },
  {
    id: 2,
    name: "Byte Byzaar",
    desc: [
      "Developed an e-commerce platform tailored for college students",
      "Implemented product listing, cart, and checkout functionality",
      "Ensured responsive UI for mobile and desktop users"
    ],
    live: "https://byte-bazaar678.netifly.app", // add your live link here
    code: "https://github.com/boyaravikumar42/ecommerce-java", // update if needed
    img: "./assets/byte.png",
    skills: ["React", "Spring boot", "mySQL", "JWT Authentication"]
  },
  {
    id: 3,
    name: "Porth polio Hub",
    desc: [
      "Developed a portfolio website to showcase my skills in front-end",
      "Ensured a responsive layout for optimal user experience across devices, using CSS media queries and flexible layout",
      "Added dynamic elements, smooth scrolling and animations using JavaScript"
    ],
    live: "https://boyaravikumar42.github.io/porth-polio/",
    code: "https://github.com/boyaravikumar42/porth-polio",
    img: "./assets/porth.png",
    skills: ["React", "Framer-motion", "CSS", "JavaScript"]
  },
  {
    id: 4,
    name: "Student clubs (CISC)",
    desc: [
      "Designed a website to describe student clubs of CSE Department for interaction of students",
      "Developed using modern web technologies like HTML, CSS and JavaScript",
      "The project focuses on delivering a user-friendly and responsive interface."
    ],
    live: "https://boyaravikumar42.github.io/cisk/",
    code: "https://github.com/boyaravikumar42/cisk",
    img: "./assets/cisc.png",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
//   {
//     id: 5,
//     name: "Mini Calculator",
//     desc: [
//       "Developed a mini calculator to perform basic arithmetic operations",
//       "Layout and design was developed by using HTML and CSS",
//       "The functionalities of calculator such as arithmetic operations implemented using JavaScript"
//     ],
//     live: "#",
//     code: "https://github.com/boyaravikumar42/mini-calculator",
//     img: "./assets/calc.png",
//     skills: ["HTML", "CSS", "JavaScript", "UI Design"]
//   }
];

    return (
        <section className="proj" id="proj">
    <h2 className="heading">Latest <span>Projects</span></h2>
    <div className="proj-wrap">
        {cards.map((e)=><Card key={e.id} name={e.name} desc={e.desc} live={e.live} code={e.code} img={e.img} skills={e.skills}/>)}
    </div>
</section>

    )
}
export default Projects;


function Card({name,desc,live,code,img,skills})
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
            <div className="proj-content">
                <h2>{name}</h2>
                <div><a href={live}><i className="fa fa-external-link-alt social-media"></i></a>
                &nbsp;&nbsp;
                <a href={code}><i className="fa-brands fa-github social-media"></i></a></div>
            </div>
            <ul>
                <li>{desc[0]}</li>
                 <li>{desc[1]}</li>
                 <li>{desc[2]}</li>
            </ul>
            <div className="skills">
        {skills?.map((skill, i) => (
          <span key={i}> #{skill}</span>
        ))}
      </div>
        </motion.div>
    )
}