import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'

function App() {

  const [isLoading,setIsLoading]=useState(null);
  const setDarkMode = () => {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  };

  const setLightMode = () => {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  };

  const toggleTheme = () => {
    let mode = document.getElementById('mode');
    const isLight = document.body.getAttribute('data-theme') === 'light';

    if (isLight) {
      setDarkMode();
      mode.style.color = 'white';
      mode.classList.remove('fa-sun');
      mode.classList.add('fa-moon');
    } else {
      setLightMode();
      mode.style.color = '#59b2f4';
      mode.classList.remove('fa-moon');
      mode.classList.add('fa-sun');
    }
  };

  // 🟡 Run once on mount
  useEffect(() => {
    setIsLoading(true);
    // Apply saved theme
    const theme = localStorage.getItem('theme') || 'light';
    const mode = document.getElementById('mode');
    
    if (theme === 'light') {
      setLightMode();
      if (mode) {
        mode.classList.add('fa-sun');
        mode.style.color = '#59b2f4';
      }
    } else {
      setDarkMode();
      if (mode) {
        mode.classList.add('fa-moon');
        mode.style.color = 'white';
      }
    }

    // Scroll-based active nav highlighting
    const navActive = () => {
      let secs = document.querySelectorAll('section');
      window.onscroll = () => {
        secs.forEach(sec => {
          let navlinks = document.querySelectorAll('header nav a');
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
          }
        });
      };
    };

    navActive();
    setIsLoading(false);
  }, []);

  return (
    <>
      <i
        id="mode"
        className="fa-solid fa-sun"
        style={{
          position: 'fixed',
          top: '90px',
          right: '5%',
          fontSize: '20px',
          color: '#59b2f4',
          cursor: 'pointer',
        }}
        onClick={toggleTheme}
      ></i>
      {isLoading && <Loader/>}
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
