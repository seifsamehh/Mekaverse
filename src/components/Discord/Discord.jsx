import React from 'react'
import './style/discord.css'
import Stack from '@mui/material/Stack';
import {motion} from 'framer-motion'
import img2 from '../../images/FooterBots2.webp'

function Discord() {
  return (
    <section className='discord'>
      <Stack className="container" direction="row" spacing={2} alignItems="center" justifyContent="space-between" component="div">
        <div className="left-content" data-aos="zoom-in-right" data-aos-duration="1000">
          <p>Join our Discord to get the<br/> news as soon as possible<br/> and follow our latest announcements. &#x2764;</p>
          <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.7}}>Join Our Discord</motion.button>
        </div>
        <div className="right-content" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
          <img src={img2} alt="bot 2" />
        </div>
      </Stack>
    </section>
  )
}

export default Discord