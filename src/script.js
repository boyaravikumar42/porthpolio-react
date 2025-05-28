/*******====================
		* 
		* typing text in the front page
		* 
		===================**************/
		var typed= new Typed(".span",{
			strings:["Full - stack Developer","Web Developer"],
			typeSpeed:80,
			backSpeed:80,
			backDelay:800,
			loop:true,
		})
        
	/*------------ menu icon scripting -------------*/
        let bar=document.getElementById('bar');
        let nav=document.getElementById('navbar');
        bar.addEventListener('click',()=>{
            bar.classList.toggle('fa-xmark');
            nav.classList.toggle('active');
        });
	/* ---------- activating links section when scrolling  ----*/
	let secs=document.querySelectorAll('section')
	console.log(secs);
	
	window.onscroll=()=>{
		secs.forEach(sec=>{
		let navlinks=document.querySelectorAll('header nav a');
		let top = window.scrollY;//position
		let offset = sec.offsetTop-150;//section height from to current position
		let height =sec.offsetHeight; //height of current section
		let id=sec.getAttribute('id');
		//console.log(top,offset,height,id);
		
		if(top>= offset && top< offset+height)
		{
			navlinks.forEach(links=>{
			links.classList.remove('active')
			});
			document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
		}
	});
	}
	/* ------------------ sticky navbar ------------------------*/
	let header =document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY>100);

	/* -------------- remove toggle icon and navbar -------------*/
	bar.classList.remove('fa-xmark');
	nav.classList.remove('active');

	nav.addEventListener('click',()=>{
		nav.classList.remove('active');
	});
	/* -------------- scroll reveal of sections     -------------*/
	ScrollReveal({
		distance:'50px',
		duration:2000,
		delay:200,
	});
	ScrollReveal().reveal('.home-content, heading',{origin:'top'});
	ScrollReveal().reveal('.home-img,',{origin:'bottom'});
	ScrollReveal().reveal('.home-content h1, .about-img, .row .title, .proj-wrap .card, .skill-bar',{origin:'left'});
	ScrollReveal().reveal('.home-content p, .about-content, .skills-wrap, .contact form',{origin:'right'});
	//email sending code
	function sendMail(){
		let params={
		 name:document.getElementById("name").value,
		 email:document.getElementById("email").value,
		 phno:document.getElementById("phno").value,
		 message:document.getElementById("message").value,
		 subject:document.getElementById("subject").value,
		} 
		emailjs.send("service_porth","template_zrr159e",params).then(/*alert("email sent !!..")*/)
		console.log(params);
		}