import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './style/links.css'

function Links() {
  return (
    <Stack className='footer-links' direction="row" alignItems="center" justifyContent="space-between" component="section">
      <Stack className="left-part" direction="row" spacing={10} alignItems="center" component="div">
        <div className="links-one">
          <h5>Join MekaVerse</h5>
          <a href="#bot">Discord</a>
          <a href="#bot">Twitter</a>
          <a href="#bot">Instgram</a>
          <a href="#bot">Meka labs Twitter</a>
          <a href="#bot">Background</a>
        </div>
        <div className="links-two">
          <h5>OpenSea</h5>
          <a href="#bot">MekaVerse</a>
          <a href="#bot">MekaFactory</a>
        </div>
      </Stack>
      <div className="right-part">
        <Button variant="contained" disabled size="large" className='button'>
          Full Website Coming Soon
        </Button>
      </div>
    </Stack>
  )
}

export default Links