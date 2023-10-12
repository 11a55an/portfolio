import React, { useState } from 'react';
import '../styles/Skills.css';

const SkillsTab = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tabName ? null : tabName));
  };

  const skills = {
    "🌍 Web Development": [
      { skill: 'HTML/CSS', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=html' },
      { skill: 'JavaScript', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=javascript' },
      { skill: 'React.Js', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=javascript' },
      { skill: 'Node.Js', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=javascript' },
    ],
    "📱 App Development": [
      { skill: 'Kotlin', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=kotlin' },
      { skill: 'Flutter', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=dart' }
    ],
    "🖥️ Desktop Development": [
      { skill: 'PyQt', link: 'https://github.com/11a55an/music-recommendation-system' },
    ],
    "🤖 Machine Learning": [
      { skill: 'Data Analysis', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=jupyter+notebook&sort=' },
      { skill: 'Data Visualization', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=jupyter+notebook&sort=' },
      { skill: 'Web Scraping', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=jupyter+notebook&sort=' },
      { skill: 'Natural Language Processing', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=jupyter+notebook&sort=' },
      { skill: 'Computer Vision', link: 'https://github.com/11a55an?tab=repositories&q=&type=&language=jupyter+notebook&sort=' },
    ],
  };

  return (
    <div id='skills'>
      <h3>Skills.</h3>
      <div className="skills-tab">
        <div className="tab">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              className={`tablinks ${activeTab === category ? 'active' : ''}`}
              onClick={() => handleTabClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {Object.keys(skills).map((category) => (
          <div
            key={category}
            className={`tabcontent ${activeTab === category ? 'active' : ''}`}
          >
            <div>
              {skills[category].map((skillItem, index) => (
                <a
                  key={index}
                  href={skillItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-badge"
                >
                  {skillItem.skill}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
