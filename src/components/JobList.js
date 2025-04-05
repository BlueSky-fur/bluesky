import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    CubeGaming: {
      jobTitle: "Founder & DevOps Lead @",
      duration: "JULY 2021 - PRESENT",
      desc: [
        "Manage infrastructure across cloud, bare-metal, and on-prem environments, ensuring stability and scalability.",
        "Deploy and maintain services like GitLab, Mattermost, Grafana, Docker, Kubernetes and Atlassian, streamlining collaboration and monitoring.",
        "Develop custom applications and scripts for managing machines and game servers, automating workflows.",
        "Build admin panels to simplify tasks for staff, improving efficiency and management.",
        "Oversee infrastructure security, implementing firewalls, access controls, and network rules to protect systems.",
        "Lead a team of 10+ members, coordinating across different roles to ensure smooth operations and project success."
      ]
    },
    "Freelance": {
      jobTitle: "SysAdmin & DevOps @",
      duration: "AUGUST 2017 - PRESENT",
      desc: [
        "Set up and managed infrastructure across cloud and bare-metal environments, ensuring stability and performance.",
        "Configured and maintained VPN networks for secure remote access and connectivity.",
        "Set up and optimized GitLab/GitHub environments, including CI/CD pipelines for automated deployments.",
        "Provided technical support for installing and configuring applications tailored to client needs.",
        "Configured network switches and backup solutions, optimizing security and reliability.",
        "Assisted DevOps teams with automation, deployments, and infrastructure improvements."
      ]
    },
    "GPORTAL": {
      jobTitle: "Customer Support Agent EU @",
      duration: "JUNE 2023 - JULY 2024",
      desc: [
        "Provided technical support for B2C and B2B customers, resolving complex issues related to server performance, configurations, and connectivity.",
        "Monitored and maintained server performance, troubleshooting hardware/network problems, managing backups, and restoring data when needed.",
        "Created technical documentation, user guides, and reports on recurring issues and their solutions.",
        "Collaborated closely with developers and internal teams to address and resolve critical infrastructure challenges.",
        "Suggested and implemented optimizations for server stability and performance, ensuring compliance with SLA requirements.",
        "Assisted company partners and influencers, ensuring smooth technical onboarding, troubleshooting issues, and optimizing their experience."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
