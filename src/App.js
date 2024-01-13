import React, { useState, useEffect } from "react"
import axios from "axios"
import { Box, Button, Stack, Grid, Typography } from "@mui/material";
import Background from './assets/images/backgrounds/main_background.png';
import Logo from './assets/images/logos/archivesEnglish.png';
// import SearchIcon from "./assets/images/icons/search.png"
import ButtonBackground1 from "./assets/images/backgrounds/button1_background.png"
import ButtonBackground from "./assets/images/backgrounds/button6_background.png"
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LanguageIcon from "./assets/images/icons/language.png"
import { useTranslation } from "react-i18next";
import LogoHindi from './assets/images/logos/archives_hindi.png';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const themeToYearMap = {
  "achievements": [2014, 2016, 2019, 2020, 2021, 2022, 2023],
  "agriculture": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "central_govt_schemes": [2014, 2015, 2018, 2019, 2021, 2022, 2023],
  "culture": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "defence": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "economy": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "editorial": [2014],
  "education": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "election_speech": [2014],
  "external_affairs_or_foreign_policy": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "health": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "home_and_states": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "independence_day_speech": [2014, 2015, 2016, 2017, 2021],
  "mann_ki_baat": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "parliament_affairs": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "pm_modi_speeches": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "power_and_renewable_energy": [2014, 2015, 2016, 2018, 2019, 2020, 2022, 2023],
  "railways": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "science_and_tech": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  "skill_development": [2014, 2015],
  "sports": [2014, 2016, 2017, 2021, 2022, 2023],
  "swatch_bharat_mission": [2014, 2018, 2019, 2020, 2021],
  "tribute": [2014, 2015, 2017],
}

const App = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0)
  const [pdfFile, setPdfFile] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [years, setYears] = useState([])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const achievements = [
    "achievements",
    "agriculture",
    "central_govt_schemes",
    "culture",
    "defence",
    "economy",
    "editorial",
    "education",
    "election_speech",
    "external_affairs_or_foreign_policy",
    "health",
    "home_and_states",
    "independence_day_speech",
    "mann_ki_baat",
    "parliament_affairs",
    "power_and_renewable_energy",
    "railways",
    "science_and_tech",
    "skill_development",
    "sports",
    "swatch_bharat_mission",
    "tribute",
    "pm_modi_speeches"
  ]

  useEffect(() => {
    const loadPdfFile = async () => {
      const api = `pdf/${selectedAchievement}/${selectedYear}.pdf`
      const res = await axios.get(api, { responseType: 'arraybuffer' })
      const blob = new Blob([res.data], { type: "application/pdf" });
      const file = new File([blob], "example.txt", { type: "application/pdf" });
      setPdfFile(file);
    };
    if (selectedAchievement && selectedYear) {
      loadPdfFile();
    }
  }, [selectedAchievement, selectedYear]);


  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column'
      }}>
      {step === 0 &&
        <Box>
          <img src={i18n.language === 'en' ? Logo : LogoHindi} alt="Logo" />
          <Box sx={{
            position: 'absolute',
            bottom: '10%',
            left: 0,
            right: 0,
          }}>
            <Box
              onClick={() => setStep(1)}
              sx={{
                borderRadius: '10px',
                color: 'white',
                fontSize: '10px',
                width: '50%',
                margin: 'auto',
                fontWeight: '900',
                border: "0.965px solid rgba(255, 255, 255, 0.00)",
                boxShadow: "0px 4.519px 5.649px 0px rgba(0, 0, 0, 0.05), -0.188px 0.188px 0.188px -0.377px rgba(255, 255, 255, 0.35) inset, 0px 0.188px 1.506px 0px rgba(255, 255, 255, 0.35) inset, 1.287px 1.287px 3.217px 0px rgba(0, 0, 0, 0.25) inset",
                backdropFilter: "blur(18.45250701904297px)"
              }}>
              <Button
                sx={{
                  backgroundImage: `url(${ButtonBackground1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '10px',
                  color: 'white',
                  padding: '12px',
                  fontSize: '28px',
                  width: '100%',
                  fontWeight: '900',
                }}>
                {t('explore')}
              </Button>
            </Box>
          </Box>
        </Box>
      }
      {step === 1 &&
        <Box style={{ display: 'flex', alignItems: "center", flexDirection: "column" }}>
          <img src={i18n.language === 'en' ? Logo : LogoHindi} alt="Logo" style={{ width: '50%' }} />
          <Box sx={{ padding: '0 40px', overflow: "hidden", }}>
            <Grid container spacing={4} sx={{ marginTop: '180px', overflow: 'auto', maxHeight: '40vh', }}>
              {achievements.map((o, index) => {
                return (
                  <Grid item md={4} key={index}>
                    <Button
                      onClick={() => {
                        setSelectedAchievement(o);
                        setYears(themeToYearMap[o])
                        setStep(2)
                      }}
                      sx={{
                        backgroundImage: `url(${ButtonBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px',
                        color: 'white',
                        height: '160px',
                        fontSize: '28px',
                        width: '100%',
                        fontWeight: '900',
                      }}>
                      {t(`${o}`)}
                    </Button>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Box>
      }
      {step === 2 &&
        <Box style={{ display: 'flex', alignItems: "center", flexDirection: "column" }}>
          <img src={i18n.language === 'en' ? Logo : LogoHindi} alt="Logo" style={{ width: '50%' }} />
          <Box sx={{ padding: '0 40px', textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: '700', fontSize: '24px', margin: '30px 0', textTransform: 'uppercase' }}>
              {t('archives')} {'>'} {t(`${selectedAchievement}`)}
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: '180px', overflow: 'auto', maxHeight: '40vh', }}>
              {years.map((o, index) => {
                if (index === years.length - 1) {
                  return (
                    <>
                      <Grid item md={4} />
                      <Grid item md={4} key={index}>
                        <Button
                          onClick={() => { setSelectedYear(o); setStep(3); setPageNumber(1) }}
                          sx={{
                            backgroundImage: `url(${ButtonBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '10px',
                            color: 'white',
                            height: '160px',
                            fontSize: '28px',
                            width: '100%',
                            fontWeight: '900',
                          }}>
                          {t(`${o}`)}
                        </Button>
                      </Grid>
                      <Grid item md={4} />
                    </>
                  )
                }
                return (
                  <Grid item md={4} key={index}>
                    <Button
                      onClick={() => { setSelectedYear(o); setStep(3); setPageNumber(1) }}
                      sx={{
                        backgroundImage: `url(${ButtonBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px',
                        color: 'white',
                        height: '160px',
                        fontSize: '28px',
                        width: '100%',
                        fontWeight: '900',
                      }}>
                      {t(`${o}`)}
                    </Button>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Box>
      }
      {step === 3 &&
        <Box style={{ display: 'flex', alignItems: "center", flexDirection: "column" }}>
          <img src={i18n.language === 'en' ? Logo : LogoHindi} alt="Logo" style={{ width: '20%' }} />
          <Typography variant="h4" sx={{ color: 'white', fontWeight: '700', fontSize: '24px', margin: '30px 0', textTransform: 'uppercase' }}>
            {t('archives')} {'>'} {t(`${selectedAchievement}`)} {'>'} {selectedYear}
          </Typography>
          <Box sx={{ padding: '0 20px', height: '70vh', width: '100%', overflow: "auto", textAlign: "center" }}>
            <Document
              file={pdfFile}
              className={"pdf"}
              pageNumber={pageNumber}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Box>
          <Stack direction={"row"} my={3}>
            <Button
              disabled={pageNumber === 1}
              onClick={() => {
                setPageNumber(pageNumber - 1)
              }}
              sx={{
                borderRadius: '10px',
                color: 'white !important',
                textTransform: 'none',
                padding: '0 50px',
                fontSize: '20px',
                fontWeight: '500',
                minHeight: '60px',
                border: "1.334px solid #FFF",
                background: "rgba(17, 17, 17, 0.40)",
                boxShadow: "0.667px -1px 3.667px 0px rgba(0, 0, 0, 0.25)",
                display: 'flex',
                opacity: pageNumber === 1 ? 0.5 : 1,
                alignItems: "center",
                justifyContent: "center",
                marginRight: '20px'
              }}>
              <ArrowLeftIcon style={{ marginRight: '12px' }} />
              {t('previous_page')}
            </Button>
            <Button
              disabled={pageNumber === numPages}
              onClick={() => {
                setPageNumber(pageNumber + 1)
              }}
              sx={{
                borderRadius: '10px',
                color: 'white !important',
                textTransform: 'none',
                padding: '0 50px',
                fontSize: '20px',
                fontWeight: '500',
                minHeight: '60px',
                opacity: pageNumber === numPages ? 0.5 : 1,
                border: "1.334px solid #FFF",
                background: "rgba(17, 17, 17, 0.40)",
                boxShadow: "0.667px -1px 3.667px 0px rgba(0, 0, 0, 0.25)",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
              }}>
              {t('next_page')}
              <ArrowRightIcon style={{ marginLeft: '12px' }} />
            </Button>
          </Stack>
        </Box>
      }
      {step !== 0 &&
        <Box style={{ position: "sticky", bottom: '0', width: "100%", height: "100%" }}>
          <Stack sx={{ padding: '0 20px', marginTop: '20px' }}>
            {/* <Stack style={{ minHeight: '60px', border: "1px solid white", padding: '20px' }} direction={"row"} alignItems={"center"}>
              <img src={SearchIcon} alt="search" width={40} />
              <input placeholder={t('search_for_speeches')} style={{ marginLeft: '12px', width: '70%', background: 'transparent', border: "none", outline: 'none', minHeight: '60px', fontSize: '28px', fontWeight: '500', color: "white" }} />
            </Stack> */}
            <Stack direction="row" sx={{ marginTop: "60px", justifyContent: 'space-between' }}>
              <Button
                onClick={() => setStep(0)}
                sx={{
                  borderRadius: '10px',
                  color: 'white',
                  textTransform: 'none',
                  padding: '0 50px',
                  fontSize: '20px',
                  fontWeight: '500',
                  minHeight: '60px',
                  border: "1.334px solid #FFF",
                  background: "rgba(17, 17, 17, 0.40)",
                  boxShadow: "0.667px -1px 3.667px 0px rgba(0, 0, 0, 0.25)",
                  display: 'flex',
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <HomeIcon style={{ marginRight: '12px' }} />
                {t('home')}
              </Button>
              <Button
                onClick={() => {
                  if (i18n.language === "en") {
                    i18n.changeLanguage("hi")
                  } else {
                    i18n.changeLanguage("en")
                  }
                }}
                sx={{
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '20px',
                  padding: '0 50px',
                  textTransform: 'none',
                  fontWeight: '500',
                  minHeight: '60px',
                  border: "1.334px solid #FFF",
                  background: "rgba(17, 17, 17, 0.40)",
                  boxShadow: "0.667px -1px 3.667px 0px rgba(0, 0, 0, 0.25)"
                }}>
                <img src={LanguageIcon} alt="language" width={24} style={{ marginRight: '12px' }} />
                {t('language')}
              </Button>
              <Button
                onClick={() => setStep(step - 1)}
                sx={{
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '500',
                  minHeight: '60px',
                  padding: '0 50px',
                  textTransform: 'none',
                  border: "1.334px solid #FFF",
                  background: "rgba(17, 17, 17, 0.40)",
                  boxShadow: "0.667px -1px 3.667px 0px rgba(0, 0, 0, 0.25)"
                }}>
                <ArrowBackIosNewIcon style={{ marginRight: '12px' }} />
                {t("back")}
              </Button>
            </Stack>
          </Stack>
        </Box>
      }
    </Box >
  );
}

export default App;
