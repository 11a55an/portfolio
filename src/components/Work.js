import "../styles/Work.css";
import { BiCodeAlt } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { BiGitRepoForked } from "react-icons/bi";

function Work() {
  return (
    <div id="work-wrapper">
      <h3>Work.</h3>
      <div className="work">
        <div className="work-res">
          <a href="https://github.com/11a55an/music-recommendation-system">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Music Recommendation System</h1>
                  <p className="desc">Music Recommendation System built using Spotify API and Cosine Similarity, interface using PyQt6</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 3</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/11a55an/american-sign-language-detection">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">American Sign Language Detection</h1>
                  <p className="desc">Model for detecting the 26 alphabetic letters from American Sign Language (ASL) using YOLOv7</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 1</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/11a55an/toxic-comment-classifier">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Toxic Comment Classifier</h1>
                  <p className="desc">Model for classifying comment toxicity trained using Random Forest</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 1</p>
                  <p className="forks"><BiGitRepoForked /> 1</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/11a55an/pakistan-super-league-psl-win-prediction">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">PSL Win Predictor</h1>
                  <p className="desc">Model for PSL Win Predictor trained using LGBM Classifier with 81% accuracy</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 0</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/11a55an/dog-breed-classifier">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Dog Breed Classifier</h1>
                  <p className="desc">Model for dog breed classifier trained using Convolutional Neural Networks (CNN)</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 0</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/11a55an/image-watermarker-using-opencv">
            <div className="left">
              <div id="card-wrapper">
                <div className="card">
                  <h1 className="title">Image Watermarker</h1>
                  <p className="desc">A comprehensive solution for embedding watermarks, such as logos or text, onto images with ease and precision.</p>
                  <p className="lang"><BiCodeAlt /> Jupyter Notebook</p>
                  <p className="stars"><BiSolidStar /> 0</p>
                  <p className="forks"><BiGitRepoForked /> 0</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
