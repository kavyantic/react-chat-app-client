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
    const chatInputHandler = (e)=>{
        setChatInput(e.target.value)
    }
    const sendMsg = (msg)=>{
        socket.emit('broadcast')
    } 
  return (
    <div className={classes['console']}>
        <div className={classes['chat-box']}>
            <section>

            </section>
            <section className={classes['chats-container']}>
                <div className={classes['msg-block']}>helo</div>
                <div className={classes['msg-block']}>elo</div>
                <div className={classes['msg-block']}></div>
                
            </section>
            <section className='footer'>
                {/* <GrEmoji className={classes['emoji-icon']} color='grey' size={30}/> */}
                <input type='text' onChange={chatInputHandler} value={chatInput} />
                 <IoSendSharp onClick={()=>{sendMsg(chatInput)}} className={classes['send-icon']} style={{color:'blue'}} color='blue' size={30}/>
       
            </section>
          </div>
    </div>
  )
}
