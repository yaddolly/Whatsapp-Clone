import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./css/Sidebar.css"
import db from './firebase';

function SidebarChat( {id,name,addnewchat} ) {

    const [ seed, setSeed] = useState("");

    useEffect(()=>{
           setSeed(Math.floor(Math.random() * 5000))
    },[])

     const createChat = () =>{
         const room =prompt("please enter room name");
            if(room)
            {
                db.collection('rooms').add({
                name:room
            })
         }
     }

  return (
     !addnewchat ? (
      <Link to={`room/${id}`}>
            <div className="Sidebar_Chat">
                 <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>

             <div className="Sidebar_ChatInfo">
                  <h2>{name}</h2>
                  <p>Last message ...</p>
              </div>
            </div>
         </Link>
            )  :(
              <div className="Sidebar_Chat" onClick={createChat}>
              <h3>Add new chat</h3>
               </div>
     )
  )
  
}

export default SidebarChat
