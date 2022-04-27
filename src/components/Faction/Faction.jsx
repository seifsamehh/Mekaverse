import React from 'react'
import './style/faction.css'
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion"
import Bots from '../../images/bots.webp'

function Faction() {
  return (
    <Stack className='content' direction="row" alignItems="center" justifyContent="space-between" spacing={2} component="section">
      <Stack className="left-part" direction="column" alignItems="flex-start" justifyContent="flex-start" component="div" data-aos="fade-right" data-aos-duration="500">
        <p>what's meka verse...</p>
        <motion.img src={Bots} alt="bots"
         whileHover={{ scale: 1.6 }}  
         whileTap={{scale: 0.6}} 
         drag 
         dragConstraints={{ left: 0, right: 800, top: 0, bottom: 0 }} />
      </Stack>
      <div className="right-part" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="800">
        <h2>In the distant <mark>future</mark>,<br/> drivers fight in a world divided into 4 Factions. Originals Meka, Mirage, F9, and Gadians are the Titans who rule this planet.</h2>
        <h2>Which Faction are you going to join?</h2>
      </div>
    </Stack>
  )
}

export default Faction