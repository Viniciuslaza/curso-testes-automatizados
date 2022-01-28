import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";

const theme = createTheme();

export default function List() {
  const [skillData, setSkillData] = useState({
    skillName: "",
    developers: [],
    profile: {
      technologies: [],
      roles: [],
    },
  });
  const [skillsData, setSkillsData] = useState([
    {
      skillName: "",
      developers: [],
      profile: {
        technologies: [],
        roles: [],
      },
    },
  ]);

  const [showSkill, setShowSkill] = useState(true);
  const [showSkills, setShowSkills] = useState(true);

  let listSkills = skillsData.map((skill, index) => (
    <ul key={index}>
      <li>Skill Name: {skill.skillName}</li>
      <li>
        Developers:
        <ul>
          <li>{skill.developers[0]}</li>
          <li>{skill.developers[1]}</li>
        </ul>
      </li>
      <li>
        Technologies:
        <ul>
          <li>{skill.profile.technologies[0]}</li>
          <li>{skill.profile.technologies[1]}</li>
        </ul>
      </li>
    </ul>
  ));

  let name = (
    <>
      <h3>{skillData.skillName}</h3>
      <ul>
        <li>Skill Name: {skillData.skillName}</li>
        <li>
          Developers:
          <ul>
            <li>{skillData.developers[0]}</li>
            <li>{skillData.developers[1]}</li>
          </ul>
        </li>
        <li>
          Technologies:
          <ul>
            <li>{skillData.profile.technologies[0]}</li>
            <li>{skillData.profile.technologies[1]}</li>
          </ul>
        </li>
      </ul>
    </>
  );
  useEffect(() => {
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill")
      .then((response) => response.json())
      .then((data) => {
        setSkillData(data[0]);
      });
  });

  useEffect(() => {
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkillsData(data);
      });
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={12}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {showSkill ? name : ""}
            {showSkills ? listSkills : ""}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
