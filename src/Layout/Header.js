



import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import socket from '../socket/socket'
import {FaReact} from 'react-icons/fa'



var tapped = false

export default function Header() {
    const [linkVis,setLinkVis] = useState(true)
    const [top, setTop] = useState(0)
    const [hold,setHold]=useState(false)
    // useEffect(()=>{
    //     // window.onscroll = (e)=>{
    //     //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     //         setTop(0)
    //     //       } else {
    //     //         setTop(-100)
    //     //       }
    //     // }

    //     socket.on('touch',(data)=>{
    //         console.log(data);
    //         setIsShown(true)
    //     })
    // } ,[])
 
    
    function toggleLinks(){
      setLinkVis(s=>{return !s})
      console.log(linkVis);
      
    }


  return (
    <Fragment>
        <header  className={classes['header']} >
          <div className={classes['logo-container']} >
              <FaReact className={classes['logo']}  size={40} />
          </div>
          <div className={classes['menu-btn']} onClick={()=>{toggleLinks()}}>
               <span></span>
               <span></span>
               <span></span>
          </div>
          <div className={classes['links-container']} style={linkVis?{display:'flex'}:{}}>
            <Link className={classes['links']} to="/about">about</Link>
            <Link className={classes['links']} to="/">Home</Link>
            <Link className={classes['links']} to="/register">register</Link>
            <Link className={classes['links']} to="/hidden">Hidden</Link>
          </div>
        </header>
    </Fragment>
  )
}
