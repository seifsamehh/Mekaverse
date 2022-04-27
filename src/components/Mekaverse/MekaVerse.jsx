import React from 'react'
import './style/MekaVerse.css'
import Stack from '@mui/material/Stack';

function MekaVerse() {
  return (
    <section className='meka-verse'>
      <Stack className="content" direction="column" alignItems="flex-start" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="800">
        <h1><span>THE</span><br/> <span>MEKAVERSE</span><br/> COLLECTION</h1>
        <button class="btn btn--stripe">View on opensea</button>
      </Stack>
    </section>
  )
}

export default MekaVerse