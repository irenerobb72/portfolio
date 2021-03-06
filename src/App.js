import "./index.scss";
import logo from "./images/irene-logo.png";
import art from "./images/color-art.png";
import { Art } from "./pages/Art";
import { Route, Switch } from "react-router";
import { Travel } from "./pages/Travel";
import { Project } from "./pages/Projects";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navigation-bar">
        <ul>
          <div className="nav-item">
            <img src={logo} alt="logo" id="logo" />
          </div>
          <div className="nav-item">
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>About Me</Link>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <Link to="/travel" style={{ textDecoration: 'none', color: 'black' }}>Travel</Link>
            </li>
          </div>
          <div className="nav-item">
            <li>
              <Link to="/art" style={{ textDecoration: 'none', color: 'black'}}>Art</Link>
            </li>
          </div>
        </ul>
      </div>
      <Switch>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/">
          <div className="main-welcome">
            <div className="content-container">
              <div className="main-text">
                <h1>My name is Irene Robb</h1>
                <p>
                  I am an artist, a coder, a student, a video gamer and a
                  traveler. Please explore the pages on my site if you wish to
                  learn more about me!
                </p>
              </div>
              <div className="main-image">
                <img src={art} alt="colorful" id="colorful-image" />
              </div>
            </div>
          </div>
          <h1>Projects</h1>
          <div className="project-container">
            <div className="project-item">
              <img src={logo} alt="logopoint2" />
              <div className="project-text">
                <h2 id="travel">Coin Game</h2>
                <p>
                  This is a game that lets you collect bitcoins as the
                  Winklevoss twins, it counts how many coins are caught and how
                  much each bitcoin is worth. I made this game using JavaScript
                  and DOM manipulation.
                </p>
                <button className="project-button">View Project</button>
              </div>
            </div>
            <div className="project-item">
              <img src={logo} alt="logopoint2" />
              <div className="project-text">
                <h2 id="travel">Tap Game</h2>
                <p>
                  This is a game that has you press any button on your keyboard
                  and changes the background color to a random color and adds a
                  random photo and sound. This was created using React and React
                  Hooks.
                </p>
                <button className="project-button">View Project</button>
              </div>
            </div>
            <div className="project-item">
              <img src={logo} alt="logopoint2" />
              <div className="project-text">
                <h2 id="travel">Cat Nap</h2>
                <p>
                  This is a website that lets you set a cat nap, this was
                  created with React and the animations for the cats is created
                  with key frame animations.
                </p>
                <button className="project-button">View Project</button>
              </div>
            </div>
            <div className="project-item">
              <img src={logo} alt="logopoint2" />
              <div className="project-text">
                <h2 id="travel">Dog Clicker</h2>
                <p>
                  This is a game that creates a bunch of puppies when the mouse
                  is clicked on the page, this is created using React and React
                  Hooks.
                </p>
                <button className="project-button">View Project</button>
              </div>
            </div>
          </div>
          <div className="about-container">
            <div className="about-image">
              <img src={art} alt="logopoint3" id="test-image" />
            </div>
            <div className="about-text">
              <h2>What I'm all about</h2>
              <p>
                I am a student at the University of New Hampshire going towards
                a degree in Information Technology. My primary skills in
                technology are web development using JavaScript, React, HTML/CSS
                and my other skills are SQL, Java, Python, and Bash.{" "}
              </p>
              <button className="project-button">Resume</button>
            </div>
          </div>
        </Route>
      </Switch>
      <h3>Don't be a stranger, please feel free to follow or contact me</h3>
      <div className="footer-container">
        <div className="footer-item">
          <p>Linkedin</p>
        </div>
        <div className="footer-item">
          <p>Github</p>
        </div>
        <div className="footer-item">
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}

export default App;
