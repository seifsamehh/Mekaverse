import React from 'react'
import './style/bot.css'
import {motion} from 'framer-motion'
import Bot1 from '../../images/bot-1.webp'
import Bot2 from '../../images/bot-2.webp'
import Bot3 from '../../images/bot-3.webp'
import Bot4 from '../../images/bot-4.webp'
import Fire from '../../images/fire.webp'
import Hibiscus from '../../images/hibiscus.webp'
import Seedling from '../../images/seedling.webp'
import Sparkles from '../../images/sparkles.webp'

function Bot() {
  return (
    <section id="bot">
      <div className="bots-gallery">
        <div className="bot-1" data-aos="fade-down" data-aos-duration="500" >
          <img src={Sparkles} alt="fire" className="emoji" />
          <motion.img src={Bot1} alt="bot one" className='bot'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1} 
          whileHover={{ scale: 1.5}}
          whileTap={{ scale: 0.8 }} />
        </div>
        <div className="bot-2" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" >
          <img src={Seedling} alt="fire" className="emoji" />
          <motion.img src={Bot2} alt="bot two" className='bot'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1} 
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }} />
        </div>
        <div className="bot-3" data-aos="fade-down" data-aos-duration="500" data-aos-delay="700" >
          <img src={Fire} alt="fire" className="emoji" />
          <motion.img src={Bot3} alt="bot three"className='bot' 
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1} 
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }} />
        </div>
        <div className="bot-4" data-aos="fade-down" data-aos-duration="500" data-aos-delay="900">
          <img src={Hibiscus} alt="Hibiscus" className="emoji" />
          <motion.img src={Bot4} alt="bot three" className='bot'
          drag
          dragConstraints={{ left: 0, right: 0, top: 10, bottom: 0 }}
          dragElastic={1} 
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}/>
        </div>
      </div>
    </section>
  )
}

export default Bot