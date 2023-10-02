import "./Skills.css";
import { FcMindMap } from 'react-icons/fc';
import {FcSettings} from "react-icons/fc";
import {FcSearch} from "react-icons/fc";
import {FcLineChart} from "react-icons/fc";
import {FcAcceptDatabase} from "react-icons/fc";
import {FcGlobe} from "react-icons/fc";
import {FcDataSheet} from "react-icons/fc";
import {FcEngineering} from "react-icons/fc";
import {FcDatabase} from "react-icons/fc";

function Skills() {
  return (
    <div id="skills-wrapper">
      <div className="skills">
        <h3>Skills.</h3>
        <button> <FcSettings/> Machine Learning</button>
        <button> <FcMindMap/> Deep Learning</button>
        <button> <FcSearch/> Data Analysis</button>
        <button> <FcLineChart/> Data Visualization</button>
        <button> <FcAcceptDatabase/> Data Modeling</button>
        <button> <FcGlobe/> Web Scraping</button>
        <button> <FcDataSheet/> Excel</button>
        <button> <FcEngineering/> Python</button>
        <button> <FcDatabase/> MySQL</button>
      </div>
    </div>
  );
}

export default Skills;
