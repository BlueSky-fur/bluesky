import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "No Man's Land": {
        title: "Placeholder",
        desc:
          "This is a Placeholder, when i have more public projects i will share them here if they are worthy enough!",
        techStack: " ",
        link: "https://github.com/BlueSky-fur",
        open: "https://github.com/BlueSky-fur",
        image: "/assets/placeholder.jpg"
      },
      Truth: {
        title: "Placeholder",
        desc:
          "This is a Placeholder, when i have more public projects i will share them here if they are worthy enough!",
        techStack: " ",
        link: "https://github.com/BlueSky-fur",
        open: "https://github.com/BlueSky-fur",
        image: "${process.env.PUBLIC_URL}/assets/placeholder.jpg"
      },
      "Tall Tales": {
        title: "Placeholder",
        desc:
          "This is a Placeholder, when i have more public projects i will share them here if they are worthy enough!",
        techStack: " ",
        link: "https://github.com/BlueSky-fur",
        open: "https://github.com/BlueSky-fur",
        image: "/assets/placeholder.jpg"
      },
      Portfolio: {
        title: "Placeholder",
        desc:
          "This is a Placeholder, when i have more public projects i will share them here if they are worthy enough!",
        techStack: " ",
        link: "https://github.com/BlueSky-fur",
        open: "https://github.com/BlueSky-fur",
        image: "/assets/placeholder.jpg"
      }
    };
    const projects = {
      "BlueSkyFur.me": {
        desc:
          "The very website you are currently looking at.",
        techStack: "React.js, Material-UI, Three.js, CSS, HTML",
        link: "https://github.com/BlueSky-fur/bluesky",
        open: "https://github.com/BlueSky-fur/bluesky"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
