import React from 'react'
import Logo from '../logo.svg'
import {SiReact} from 'react-icons/si'
import classes from './Navigator.module.css'

export default function NavInt() {
  return (
   <header>
      <SiReact className={classes.logo} />
   </header>
  )
}
