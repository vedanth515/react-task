import './get-in-touch.css'
import { IoIosArrowDropright } from "react-icons/io";


function GetInTouch(){
    return(
        <div id="get-in-main">
            <div id="get-in-left">
                <p id='p1'>Ready to take your project to the next level with?</p>
                <h1>Get in touch with us today to discuss about your project and discover how we can assist you in crafting, building, and presenting a reputable online brand</h1>
                <p>We'll get back to you as soon as possible to schedule a consultation and discuss how we can support your project.</p>
            </div>
            <div id="get-in-right">
                <div id="get-in-right-top">
                    <input placeholder="John Doe"></input>
                    <input placeholder="Mail@Example.com"></input>
                </div>
                <div id="get-in-right-bottom">
                    <textarea placeholder="Type Here"></textarea>
                    <button>Send Message        <IoIosArrowDropright /></button>
                </div>
            </div>
        </div>
    )
}
export default GetInTouch;