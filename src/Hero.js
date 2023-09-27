import './Hero.css';
import hand from "./waving-hand.webp";
function Hero() {
  return (
    <div className="hero-container">
        <h2>Hey <img src={hand}/></h2>
        <h2>I'm Hassan (@11a55an)</h2>
        <span>Welcome to my coding journey!</span>
        <span>I'm a Computer Science undergrad at the University of Gujrat,</span>
        <span>diving into the fascinating world of technology and software.</span>
    </div>
  );
}

export default Hero;
