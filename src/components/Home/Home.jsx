import React from 'react'
import './style/home.css'
import {motion} from 'framer-motion'
import Stack from '@mui/material/Stack';
import Logo from '../../images/logo.webp'
import Bot1 from '../../images/bot-1.webp'

function Home() {
  window.onload = () => {
    const header = document.getElementById('header');
    const list = ["#20b0d7","#d69dbb", "#bc1010", "#9faac0"];
    const ranNum= Math.floor(Math.random()*4);
    header.style.backgroundColor = list[ranNum];
  }
  return (
    <header id='header'>
      <Stack direction="row" alignItems="center" justifyContent="space-between" component="nav">
        <Stack className="logo" direction="row" alignItems="center" justifyContent="flex-start" component="div">
          <img src={Logo} alt="logo" />
          <h4>Meta Verse <sup>&copy;</sup></h4>
        </Stack>
        <Stack className="links" spacing={2} direction="row" alignItems="center" component="div">
          <a href="#bot">claim your meka bots</a>
          <a href="#bot" onClick={e=>e.preventDefault()}>More to come soon</a>
        </Stack>
      </Stack>
      <Stack className="content" alignItems="center" justifyContent="center" component="div" data-scroll-section>
        <div className="bot">
          <motion.img src={Bot1} alt="bot one" id='bot'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            drag
            dragConstraints={{ left: -300, right: 300, top: -300, bottom: 0 }}
            dragElastic={1} />
        </div>
        <div className="heading" data-aos="fade-right" data-aos-duration="4000">
          <div className="line-heading">
            <h3>METABOTS</h3>
            <h3>CLAIM</h3>
          </div>
          <h1>METABOTS</h1>
        </div>
      </Stack>
      <Stack className="content-below" alignItems="center" justifyContent="center" component="div">
          <h1 data-aos="zoom-in" data-aos-duration="1000">WELCOME MEKAVERSE UNIVERSE</h1>
      </Stack>
    </header>
  )
}

export default Home