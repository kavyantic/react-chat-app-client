import React, { useState } from 'react'
import classes from './Console.module.css'
import { IoSendSharp } from 'react-icons/io5';
import { GrEmoji } from 'react-icons/gr';
import socket from '../socket/socket';
import {useDispatch,useSelector} from 'react-redux'



export default function Console() {
    const dispatch = useDispatch()
    const chats = useSelector(state=>{return state.currernt})
    
    const [chatInput,setChatInput] = useState('')
    const [vis,setVis] = useState(false)
    const chatInputHandler = (e)=>{
        setChatInput(e.target.value)
    }

    socket.on('logo',(data)=>{
      setVis( v=>!v)
      // alert(data)
    })

    const leaveRoom = ()=>{
      console.log('left');
      socket.emit('leaver')
  } 

    const sendMsg = (id)=>{
        socket.emit('helo',{id,msg:'hello'})
        console.log(id);
    } 
  return (
    <div className={classes['console']}  style={vis?{backgroundColor:'black'}:{}} >
        <div className={classes['chat-box']} >
            <section>
              <input value={socket.id}/>
            </section>
            <section className={classes['chats-container']} >
                <div className={classes['msg-block']}>helo</div>
                <div className={classes['msg-block']}>elo</div>
                <div className={classes['msg-block']}></div>
                
            </section>
            <section className='footer'>
                {/* <GrEmoji className={classes['emoji-icon']} color='grey' size={30}/> */}
                <input type='text' onChange={chatInputHandler} value={chatInput} />
                <input type='button' value='leave' onClick={()=>{leaveRoom()}} />
                 <IoSendSharp onClick={()=>{sendMsg(chatInput)}} className={classes['send-icon']} style={{color:'blue'}} color='blue' size={30}/>
            </section>
          </div>
    </div>
  )
}
