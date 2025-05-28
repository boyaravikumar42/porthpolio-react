import { motion } from 'framer-motion';
import React from 'react';
function About()
{
    return (
        <section className="about"id="about">
        <motion.div 
            initial={{ opacity: 0, x: -100 }}       
            whileInView={{ opacity: 1, x: 0 }}         
            transition={{ duration: 1 }} 
            className="about-img">
            <img src="./assets/one.jpg" alt=""/>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 150 }}       
            whileInView={{ opacity: 1, x: 0 }}         
            transition={{ duration: 1 }} 
             className="about-content">
            <h2>About <span>Me</span></h2>
            <h3>Full-stack Developer</h3>
            <p><span><i className="fa-solid fa-angle-right"></i>&nbsp; Email:</span> &nbsp; boyaravikumar42@gmail.com</p>
            <p><span><i className="fa-solid fa-angle-right"></i>&nbsp; Degree:</span>&nbsp; B.Tech - CSE</p>
            <p><span><i className="fa-solid fa-angle-right"></i>&nbsp; Location :</span> &nbsp; Nandyal, AP, India</p>
            <p><span><i className="fa-solid fa-angle-right"></i>&nbsp; Phno:</span> &nbsp; +91 9573796134</p>
            <br/>
            <p style={{textIndent:"50px"}}>        Enthusiastic and self-motivated Computer Science fresher with a
                strong academic background and foundational knowledge in
                software development, algorithms, and database management.
                Proficient in programming languages and
                experienced in building small-scale projects during academics
                . Skilled in problem-solving, data structures, and web
                development technologies. A quick learner with a passion for
                technology, ready to take on new challenges and contribute to
                innovative solutions in a dynamic work environment</p>
        </motion.div>
    </section>
    )
}
export default About;