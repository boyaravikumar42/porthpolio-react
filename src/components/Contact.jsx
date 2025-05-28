import React, { useState } from 'react';
import { motion } from 'framer-motion';
function Contact(){
    const [formdata,setFormdata] = useState({
        name: "",
        email: "",
        phno: "",
        subject: "",
        message: ""
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdata({
            ...formdata,
            [name]: value
        })
    }
    return (
        <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <motion.form
                initial={{ opacity: 0, x: 100 }}       
                whileInView={{ opacity: 1, x: 0 }}         
                transition={{ duration: 1 }} 
        action="" className="input-wrapper">
            <div className="input-box">
                <input type="text" placeholder="Full Name" value={formdata.name} id="name" name="name" onChange={e=>handleChange(e)} required/>
                <input type="email" placeholder="Email Addres" value={formdata.email} id="email" name="email" onChange={e=>handleChange(e)} required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Mobile Number" value={formdata.phno} id="phno" name="phno"  onChange={e=>handleChange(e)} required/>
                <input type="text" placeholder="Email Subject" name="subject" value={formdata.subject} onChange={e=>handleChange(e)} id="subject" required/>
            </div>
            <textarea cols="30" rows="10" placeholder="Your Message" name="message" value={formdata.message} onChange={e=>handleChange(e)} id="message" required></textarea>
            <input type="submit" value="Send Message"className="btn"/>
        </motion.form>
    </section>
    )
}
export default Contact;
// import React from 'react';