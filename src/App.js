import React, { useState, useRef, useEffect } from "react"
import { Box, Button, Stack } from "@mui/material";
import Background from './assets/images/backgrounds/main_background.png';
import ButtonBackground1 from "./assets/images/backgrounds/button1_background.png"
import ButtonBackground2 from "./assets/images/backgrounds/button2_background.png"
import ButtonBackground3 from "./assets/images/backgrounds/button3_background.png"
import ButtonBackground4 from "./assets/images/backgrounds/button4_background.png"
import ButtonBackground5 from "./assets/images/backgrounds/button5_background.png"
import MySwiper from "./components/MySwiper/MySwiper";
import SocialEmpowermentCard1 from "./assets/images/cards/social_empowerment/1.png";
import SocialEmpowermentCard2 from "./assets/images/cards/social_empowerment/2.png";
import SocialEmpowermentCard3 from "./assets/images/cards/social_empowerment/3.png";
import SocialEmpowermentCard4 from "./assets/images/cards/social_empowerment/4.png";
import SocialEmpowermentCard5 from "./assets/images/cards/social_empowerment/5.png";
import SocialEmpowermentCard6 from "./assets/images/cards/social_empowerment/6.png";
import SocialEmpowermentCard7 from "./assets/images/cards/social_empowerment/7.png";
import SocialEmpowermentCard8 from "./assets/images/cards/social_empowerment/8.png";
import SocialEmpowermentCard9 from "./assets/images/cards/social_empowerment/9.png";
import SocialEmpowermentCard10 from "./assets/images/cards/social_empowerment/10.png";
import AatamNirbharBharatCard1 from "./assets/images/cards/aatamnirbhar_bharat/1.png";
import AatamNirbharBharatCard2 from "./assets/images/cards/aatamnirbhar_bharat/2.png";
import AatamNirbharBharatCard3 from "./assets/images/cards/aatamnirbhar_bharat/3.png";
import AatamNirbharBharatCard4 from "./assets/images/cards/aatamnirbhar_bharat/4.png";
import AatamNirbharBharatCard5 from "./assets/images/cards/aatamnirbhar_bharat/5.png";
import AatamNirbharBharatCard6 from "./assets/images/cards/aatamnirbhar_bharat/6.png";
import AatamNirbharBharatCard7 from "./assets/images/cards/aatamnirbhar_bharat/7.png";
import AatamNirbharBharatCard8 from "./assets/images/cards/aatamnirbhar_bharat/8.png";
import AatamNirbharBharatCard9 from "./assets/images/cards/aatamnirbhar_bharat/9.png";
import AatamNirbharBharatCard10 from "./assets/images/cards/aatamnirbhar_bharat/10.png";
import Development1 from "./assets/images/cards/development/1.png";
import Development2 from "./assets/images/cards/development/2.png";
import Development3 from "./assets/images/cards/development/3.png";
import Development4 from "./assets/images/cards/development/4.png";
import Development5 from "./assets/images/cards/development/5.png";
import Development6 from "./assets/images/cards/development/6.png";
import Development7 from "./assets/images/cards/development/7.png";
import Education1 from "./assets/images/cards/education/1.png";
import Education2 from "./assets/images/cards/education/2.png";
import Education3 from "./assets/images/cards/education/3.png";
import Education4 from "./assets/images/cards/education/4.png";
import Education5 from "./assets/images/cards/education/5.png";
import Education6 from "./assets/images/cards/education/6.png";
import Innovation1 from "./assets/images/cards/innovation/1.png";
import Innovation2 from "./assets/images/cards/innovation/2.png";
import Innovation3 from "./assets/images/cards/innovation/3.png";
import Innovation4 from "./assets/images/cards/innovation/4.png";
import Innovation5 from "./assets/images/cards/innovation/5.png";
import Innovation6 from "./assets/images/cards/innovation/6.png";
import Innovation7 from "./assets/images/cards/innovation/7.png";
import Innovation8 from "./assets/images/cards/innovation/8.png";
import Innovation9 from "./assets/images/cards/innovation/9.png";
import Innovation10 from "./assets/images/cards/innovation/10.png";
import Innovation11 from "./assets/images/cards/innovation/11.png";

const App = () => {
  const [selected, setSelected] = useState("AATMANIRBHAR BHARAT")
  const buttons = [{
    name: "AATMANIRBHAR BHARAT",
    backgroundImage: ButtonBackground1,
  },
  {
    name: "SOCIAL EMPOWERMENT",
    backgroundImage: ButtonBackground2,
  },
  {
    name: "DEVELOPMENT",
    backgroundImage: ButtonBackground3,
  },
  {
    name: "EDUCATION",
    backgroundImage: ButtonBackground4,
  },
  {
    name: "INNOVATION",
    backgroundImage: ButtonBackground5,
  }]

  const slides = {
    "AATMANIRBHAR BHARAT": [AatamNirbharBharatCard1, AatamNirbharBharatCard2, AatamNirbharBharatCard3, AatamNirbharBharatCard4, AatamNirbharBharatCard5, AatamNirbharBharatCard6, AatamNirbharBharatCard7, AatamNirbharBharatCard8, AatamNirbharBharatCard9, AatamNirbharBharatCard10],
    "SOCIAL EMPOWERMENT": [SocialEmpowermentCard1, SocialEmpowermentCard2, SocialEmpowermentCard3, SocialEmpowermentCard4, SocialEmpowermentCard5, SocialEmpowermentCard6, SocialEmpowermentCard7, SocialEmpowermentCard8, SocialEmpowermentCard9, SocialEmpowermentCard10],
    "DEVELOPMENT": [Development1, Development2, Development3, Development4, Development5, Development6, Development7],
    "EDUCATION": [Education1, Education2, Education3, Education4, Education5, Education6],
    "INNOVATION": [Innovation1, Innovation2, Innovation3, Innovation4, Innovation5, Innovation6, Innovation7, Innovation8, Innovation9, Innovation10, Innovation11],
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
      <Box sx={{ minHeight: "90vh", display: 'flex', alignItems: "center" }}>
        <MySwiper slides={slides[selected]} />
      </Box>
      <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
        {buttons.map((button, index) => {
          return (
            <Box
              key={index}
              onClick={() => setSelected(button.name)}
              sx={{
                backgroundColor: "linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), rgba(255, 255, 255, 0.10);",
                borderRadius: '10px',
                color: 'white',
                margin: '0 12px',
                fontSize: '10px',
                fontWeight: '900',
                border: "0.965px solid rgba(255, 255, 255, 0.00)",
                boxShadow: "0px 4.519px 5.649px 0px rgba(0, 0, 0, 0.05), -0.188px 0.188px 0.188px -0.377px rgba(255, 255, 255, 0.35) inset, 0px 0.188px 1.506px 0px rgba(255, 255, 255, 0.35) inset, 1.287px 1.287px 3.217px 0px rgba(0, 0, 0, 0.25) inset",
                backdropFilter: "blur(18.45250701904297px)"
              }}>
              <Button
                sx={{
                  backgroundImage: `url(${button.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '10px',
                  color: 'white',
                  padding: '12px',
                  fontSize: '10px',
                  fontWeight: '900',
                }}>
                {button.name}
              </Button>
            </Box>
          )
        })}
      </Stack>
    </Box >
  );
}

export default App;
