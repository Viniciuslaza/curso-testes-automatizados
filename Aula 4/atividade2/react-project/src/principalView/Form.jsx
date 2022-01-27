import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';

const theme = createTheme();

export default function Form() {

  const [skillData, setSkillData] = useState({
    "skillName": "",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  });
  const [skillsData, setSkillsData] = useState([{
    "skillName": "",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  }]);

  const [showSkill, setShowSkill] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      skill: data.get("skill"),
      developers: data.get("developers"),
      technologies: data.get("technologies"),
      roles: data.get("roles")
    });
  };

  function loadSkill() {
    setShowSkill(true);
    setShowSkills(false);
    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill')
        .then(response => response.json())
      .then(data => {
        setSkillData(data[0]);
        });
  }
  function loadSkills() {
    setShowSkill(false);
    setShowSkills(true);
    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
        .then(response => response.json())
      .then(data => {
        setSkillsData(data);
        });
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Formulário
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="skill"
                label="Skill Name"
                name="skill"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="developers"
                label="Developers"
                id="developers"
              />
              <TextField
                margin="normal"
                required
                style={{ display: "flex" }}
                id="technologies"
                label="Technologies"
                name="technologies"
              />
              <TextField
                margin="normal"
                required
                style={{ display: "flex" }}
                id="roles"
                label="Roles"
                name="roles"
              />
              <Button
                type="submit"
                fullWidth
                style={{
                  width: "30%",
                  height: "43px",
                  alignItems: "center",
                  marginLeft: "150px",
                  marginTop: "50px",
                  textTransform: "capitalize",
                  backgroundColor: "black"
                }}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Skill
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
