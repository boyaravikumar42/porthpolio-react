import React from "react";
function Header() {
    const handleBar=(e)=>{
        const navbar = document.getElementById("navbar");
        const bar = document.getElementById("bar");
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
            bar.classList.remove("fa-xmark");
            bar.classList.add("fa-bars-staggered");
        } else {
            navbar.style.display = "flex";
            bar.classList.remove("fa-bars-staggered");
            bar.classList.add("fa-xmark");
        }

    }
    const handlenav=()=>{
        const navbar = document.getElementById("navbar");
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
            bar.classList.remove("fa-xmark");
            bar.classList.add("fa-bars-staggered");
        }
        
    }   

    return (
        <header className="header">
        <div>
            <a href="#" className="logo" >B.Ravi Kumar</a>
        </div>
        <div>
            <i className="fa-solid fa-bars-staggered" id="bar" onClick={(e)=>handleBar(e)}></i>
        </div>
        <nav className="navbar" id="navbar" onClick={handlenav}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills1" style={{display: "none"}}>Skills</a>
            <a href="#skills">Skills</a>
            <a href="#resume">Resume</a>
            <a href="#proj">Projects</a>         
            <a href="#projects" style={{display: "none"}}>Projects</a>
            <a href="#contact">Contact</a>
            
        </nav>
    </header>
    )
}
export default Header;