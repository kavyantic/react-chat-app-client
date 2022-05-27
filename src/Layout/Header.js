



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
    const [loc,setLoc] = useState({})
    const [ori,setOri] = useState({
      gamma:90
    })

    useLayoutEffect(()=>{
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        setLoc({
          lat:crd.latitude,
          lng:crd.longitude
        })
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setLoc(err)
      }
      
      navigator.geolocation.watchPosition(success, error, options);

      window.addEventListener('deviceorientation', function(event) {
        console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
        setOri({
          alpha:event.alpha,
          beta:event.beta,
          gamma:event.gamma
        })

      });
      
    },[])
    
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
            <Link className={classes['links']} to="/about">{JSON.stringify(loc)}</Link>
            <Link className={classes['links']} to="/">{JSON.stringify(ori)}</Link>
            <Link className={classes['links']} to="/register">Register</Link>
            <Link className={classes['links']} to="/hidden">Hidden</Link>
          </div>
        </header>
    </Fragment>
  )
}
