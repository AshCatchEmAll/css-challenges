import logo from "./logo.svg";
import doc from "./images/icon-document.svg";
import upload from "./images/icon-upload.svg";
import folder from "./images/icon-folder.svg";
import fyloLogo from "./images/logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(50);
  const [fillValue, setFillValue] = useState(((50 - 0) * 100) / (1000 - 0));

  function handleChange(event) {
    setValue(event.target.value);
    setFillValue(((event.target.value - 0) * 100) / (1000 - 0));
  }
  return (
    <div className="outer-div">
      <div className="grid-container">
        <div className="side-a">
          <img className="logo" src={fyloLogo} />

          <div className="options">
            <img className="file" src={doc} />
            <img className="folder" src={folder} />
            <img className="upload" src={upload} />
          </div>
        </div>
        <div className="side-b">
        <div className="tooltip"><span className="18">18</span><span className="five">5</span> <span className="gbleft">GB LEFT</span></div>
          <div className="slider-title">
            You’ve used <span>815 GB</span> of your storage
          </div>
          <div

            className="slider-div"
          >
            <input
              type="range"
              min="0"
              onChange={handleChange}
              style={{
                background: `linear-gradient(to right, #e66465 ${fillValue}%, hsl(229, 57%, 11%) ${fillValue}%)`,
              }}
              max="1000"
              value={value}
              class="slider"
              id="myRange"
            />
          </div>
          <div className="slider-subtitle">
            <div className="left-subtitle">0 GB</div>
            <div className="right-subtitle">1000 GB</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Fylo data storage component</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  You’ve used 815 GB of your storage

  185 GB Left
  
  0 GB
  1000 GB
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>

*/
