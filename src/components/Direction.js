import React, { Fragment, useLayoutEffect, useState } from 'react'
import classes from './Direction.module.css'
import {useSelector} from 'react-redux'


export default function Direction() {
    const friendCords = useSelector(state=>state.cords)
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
          lng:crd.longitude,
          acc:crd.accuracy
        })
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setLoc(err)
      }
      
      navigator.geolocation.watchPosition(success, error, options);
      
      window.addEventListener('deviceorientationabsolute', function(event) {
        setOri({
          alpha:event.alpha,
          beta:event.beta,
          gamma:event.gamma
        })
      });
      
    },[])
  return (
      <Fragment>
             <div className={classes['container']}>
             <h1 style={{fontSize:'3rem',color:'white'}}>{ori.alpha}</h1>

                <div className={classes['north-rotate']}>

                <div className={classes['direction']} style={{transform:`rotate(${ori.alpha}deg)`}}>
                    <div className={classes['arrow']}></div>
                </div>
                </div>
            </div>
      </Fragment>
  
  )
}
