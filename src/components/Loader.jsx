import { section } from "framer-motion/client";

function Loader()
{
    return (
        <section>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="inner"></div>
                </div>
                <div className="loader-text" style={{fontSize:"2rem",paddingTop:"3rem",paddingLeft:"1rem",fontWeight:"semiBold"}}>Loading . . .</div>
            </div>
        </section>

    )
}
export default Loader;