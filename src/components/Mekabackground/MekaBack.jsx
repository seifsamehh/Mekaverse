import React from 'react'
import './style/mekaBack.css'
import Stack from '@mui/material/Stack';

function MekaBack() {
  return (
    <section className='meka-bg'>
      <Stack className="content" direction="column" alignItems="flex-start" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200">
        <h1><span>CHANGE</span><br/> <span>YOUR MEKA</span><br/> BACKGROUND</h1>
        <button class="btn btn--stripe">customize</button>
      </Stack>
    </section>
  )
}

export default MekaBack