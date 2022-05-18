import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'
import NavInt from './NavigatorInterface'


export default function Layout({children}) {
  return (
    <Fragment>
        <NavInt/>
            {children}
        <Footer/>
    </Fragment>
  )
}
