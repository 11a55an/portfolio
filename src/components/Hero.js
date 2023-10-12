import '../styles/Hero.css';
import hand from "../assets/waving-hand.webp";
import {HiMail} from "react-icons/hi";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-container">
        <span className='hey'>Hey <img src={hand}/></span>
        <h2>I'm Hassan (@11a55an)</h2>
        <p>Mastering Machine Learning: Unveiling Patterns, Unleashing Potential.</p>
        <ul>
        <li><a href="https://www.linkedin.com/in/11a55an/"><FaLinkedinIn size={12}/> LinkedIn</a></li>
        <li><a href="https://twitter.com/11a55an"><FaTwitter size={12}/> Twitter</a></li>
        <li><a href="https://github.com/11a55an"><FaGithub size={12}/> Github</a></li>
        <li><a href="mailto:11a55an@proton.me"><HiMail size={12}/> Mail</a></li>
        </ul>
    </div>
  );
}

export default Hero;
