import React from 'react'
import s from './Message.module.css'

type MessagePropsTypeType = {
   avatar: string
   name: string
   message: string
   time: string

}

function Message(props: MessagePropsTypeType) {
   return (
      <div className={s.message}>
         <img className={s.avatar} src={props.avatar} alt="Avatar"/>
         <div className={s.angel}></div>
         <div className={s.body}>
            <div className={s.name}>{props.name}</div>
            <div className={s.text}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
         </div>
      </div>
   )
}

export default Message
