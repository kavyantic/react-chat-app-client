import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'
import './Layout.css'

export default function Layout({children}) {
  return (
    <Fragment>
        <Header/>
            <main>
              {children}
            </main>
        <Footer/>
    </Fragment>
  )
}
