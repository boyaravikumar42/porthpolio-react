import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import React from 'react';

function Home()
{
    return (
        <section className="home" id="home">
        <motion.div
            initial={{ opacity: 0, scale: 0 }}       
            whileInView={{ opacity: 1, scale: 1 }}         
            transition={{ duration: 1 }} 
            className="image">
            <img src="./assets/one.jpg"alt="image" />
        </motion.div>
        <div className="home-content">
            <motion.h2
            initial={{ opacity: 0, y: -100 }}       
            whileInView={{ opacity: 1, y: 0 }}         
            transition={{ duration: 1 }}
            className="home-h2"
            >Hi,Myself</motion.h2>


            <motion.h1
            initial={{ opacity: 0, x: -100 }}       
            whileInView={{ opacity: 1, x: 0 }}         
            transition={{ duration: 1 }} 
            >Boya Ravi kumar</motion.h1>
            
            <motion.h2
            initial={{ opacity: 0, y: -100 }}       
            whileInView={{ opacity: 1, y: 0 }}         
            transition={{ duration: 1 }}
             className="home-h2">And I'm a &nbsp;
                <span
                 className="span text home-h2" style={{display:"inline-block"}}>
                    <Typewriter
                            options={{
                            strings: ["Full-Stack Developer", "Java Ethusiant", "Web Developer"],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                </span>
            </motion.h2>
            <motion.p
            initial={{ opacity: 0, x: 100 }}       
            whileInView={{ opacity: 1, x: 0 }}         
            transition={{ duration: 1 }} 
             style={{textIndent:"50px"}}>I am a passionate  Full Stack Developer with a strong foundation in Computer science. I am skilled in web development to build robust, scalable applications.  I continuously sharpen my technical expertise to stay ahead in the ever-evolving tech industry. My dedication to learning and solving complex problems makes me an adaptable and effective developer, ready to take on new challenges and contribute to innovative projects.</motion.p>
          
           <div className="network">
                <a href="https://www.linkedin.com/in/boyaravikumar42/"><i className="fa-brands fa-linkedin-in social-media"></i></a>
                <a href="https://github.com/boyaravikumar42"><i className="fa-brands fa-github social-media"></i></a>
                <a href="https://www.hackerrank.com/profile/boyaravikumar42"><i className="fa-brands fa-hackerrank social-media"></i></a><br/>         
           </div>
           <a href="mailto:boyaravikumar42@gmail.com" className="btn">Hire Me</a>
        </div>
    </section>
 
    )
}
export default Home;