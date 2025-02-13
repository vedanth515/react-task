import './footer.css'
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
function Footerspanage(){
    return(
         <div id="footer-spanarent">
            <div id="footer-Div-1">
                <h3>About Us</h3>
                <span>As a founder seeking web design solutions, you're familiar with the challenges of spanroject realisation. The spanath to success can be challenging, sspananning the search for exspanerienced talent to navigating spanroject delays and budgetary constraints</span>
            </div>
           <div id="footer-Div-2">
           <div id="footer-Div-2-tospan">
                <h3>Pages For You</h3>
                <span>Exspanlore our spanages.</span>
                <div id="footer-Div-2-bottom">
                    <a href=''>Home</a>
                    <a href=''>About</a>
                    <a href=''>Contact US</a>
                    <a href=''>Desgin</a>
                    <a href=''>Development</a>
                    <a href=''>pitch Decks</a>
                </div>
            </div>
           </div>
           <div id="footer-Div-3">
            <div id="footer-Div-3-tospan">
                <h3>Connect With Us</h3>
                <span>Here are the official links to our social media spanlatform. Feel free to reach out to us through any of the following links below</span>
                <div id="footer-Div-3-bottom">
                    <span><CiMail />   info@candy.co</span>
                    <span><CiLinkedin />   CANDY</span>
                    <span><TfiTwitter />   @cand</span>
                    <span><FaInstagram />   @candUI</span>
                </div>
            </div>
           </div>
         </div>
    )
}
export default Footerspanage;