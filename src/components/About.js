import "../styles/About.css";
import about from "../assets/about.jpeg"

function About() {
  return (
    <div id="about-wrapper">
      <div className="about">
        <div className="about-text">
          <h3>About.</h3>
          <p>Hey, I'm Hassan—on a quest to conquer the realm of machine learning, unraveling algorithms, and chasing that data dream. Beyond the code, I'm all about Manchester United victories, the magic of Desi Indie beats, and mastering the TV show marathon game. In this journey, I'm all in, both in the tech arena and the world of entertainment!</p>
          <br/><br/><p>I believe in the power of collaboration and continuous learning. Engaging with the vibrant tech community keeps me fueled and motivated to explore new horizons in the digital landscape. Whether it's attending hackathons, contributing to open-source projects, or participating in AI meetups, I find immense joy in sharing ideas and experiences with like-minded enthusiasts.</p>
          <br/><br/><p>In conclusion, life for me is an exciting adventure where I wear multiple hats, blending my passion for technology with the thrills of football, beats of music, and tales from the screen. It's about embracing it all and finding the perfect harmony between code and culture.</p>
          <a href="/about" className="readmore">Read more..</a>
        </div>
        <div className="about-img">
          <img src={about}/>
        </div>
      </div>
    </div>
  );
}

export default About;
