import React, { useState } from 'react';
import '../styles/Skills.css';

const SkillsTab = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === tabName ? null : tabName));
  };

  const skills = {
    "🌍 Web Development": ['HTML/CSS','JavaScript', 'React.Js', 'Node.Js'],
    "📱 App Development": ['Flutter', 'Kotlin Compose'],
    "🖥️ Desktop Development": ['PyQt'],
    "🤖 Machine Learning": ['Data Analysis', "Data Visualization", "Data Mining", "Web Scraping", "Natural Language Processing", "Computer Vision"],
  };

  return (
    <div id='skills'>
      <h3>Skills</h3>
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
            {skills[category].map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SkillsTab;
