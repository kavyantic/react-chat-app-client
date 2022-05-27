import React, { Fragment,useState,useLayoutEffect } from 'react'
import Console from '../components/Console'
import socket from '../socket/socket'
import classes from './Home.module.css'

export default function Home() {

  return (
    <Fragment>
      <main className={classes['container']}>
      <a href='https://98f0-2409-4052-e91-a79a-1c78-95a3-2b6c-86a3.ngrok.io'>lonk </a>

         {/* <Console/> */}
      </main>
    </Fragment>
  )
}
