import React from 'react'
import { Button } from '@material-ui/core'

const Home = () => {
  return (
    <div>
      <h1>Universal Cryptocurrency Addresses</h1>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={() =>
          window.location.href = 'https://github.com/ty-everett/bips/blob/master/bip-3301.mediawiki'
        }
      >
        Read the Spec
      </Button>
      <h2>Connect With Us</h2>
      <p>
        We're happy to answer any questions you have and help your project get 
        started with Universal Addresses.
      </p>
      <ul>
        <li><a href='https://discord.gg/MujcsrF'>Discord</a></li>
        <li>
          <a href='https://t.me/joinchat/IHoRABX0qxagbubmX0mwzg'>
            Telegram
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Home
