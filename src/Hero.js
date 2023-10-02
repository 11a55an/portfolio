import './Hero.css';
import hand from "./waving-hand.webp";
function Hero() {
  return (
    <div className="hero-container">
        <span className='hey'>Hey <img src={hand}/></span>
        <h2>I'm Hassan (@11a55an)</h2>
        {/* <h3>Envisioning the Future Through Data and Algorithms.</h3> */}
        <p>Mastering Machine Learning: Unveiling Patterns, Unleashing Potential.</p>
    </div>
  );
}

export default Hero;
