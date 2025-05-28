function Services(){

const services =[
    {
        id:1,
        icon:"fa-brands fa-github social-media",
        title:"Web development",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis velit amet repellendus ullam dolor aliquam ut nulla, cupiditate assumenda quaerat in omnis sed, nam nemo nesciunt rem perferendis. Harum"
    },
    {
        id:2,
        icon:"fa-brands fa-github social-media",
        title:"Android Programming",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis velit amet repellendus ullam dolor aliquam ut nulla, cupiditate assumenda quaerat in omnis sed, nam nemo nesciunt rem perferendis. Harum"
    },
    {
        id:3,
        icon:"fa-brands fa-github social-media",
        title:"Machine Learning",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis velit amet repellendus ullam dolor aliquam ut nulla, cupiditate assumenda quaerat in omnis sed, nam nemo nesciunt rem perferendis. Harum"
    },
]
    return(
        <section className="skills-container" id="skills1" style={{display:"none"}}>
        {services.map((ele)=><Skills icon={ele.icon} title={ele.title} desc={ele.desc} key={ele.id}/>)}
    </section>
    )
}
export default Services;

function Skills({icon,title,desc}){
    return(
        <div className="card" >
            <i className={icon}></i>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href="#" className="btn">click here</a>
        </div>

    )
}