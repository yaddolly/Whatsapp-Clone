import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import "./css/Sidebar.css"
import db from './firebase';

function Sidebar() {
 
      const [rooms, setRooms] = useState([]);
      
      useEffect(()=>{
           db.collection('rooms').onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map(doc=>({
                  id: doc.id,
                  data: doc.data()
            })))
           })
      },[])


  return (
    <div className="Sidebar">

                 {/* <Header> */}
             
     <div className="Sidebar_header">
           <Avatar/>

            <div className="Sidebar_headerRight">
                <IconButton>
                      <DonutLargeIcon/>
                </IconButton>
                
                <IconButton>
                      <ChatIcon/>
                </IconButton>

                <IconButton>
                      <MoreVertIcon/>
                </IconButton>
                 
            </div>
    </div>
          
          {/* seachbox */}
   
    <div className="Sidebar_search">
        <div className="Sidebar_searchcontainer">
               <SearchIcon/>
               <input type="text" placeholder="search or start new chat"/>
        </div>
    </div>

          {/* chats */}

      <div className="Sidebar_chat">
           
           <SidebarChat addnewchat/>
            
            {
                  rooms.map(room=>{
                     return <SidebarChat key={room.id} id={room.id} name={room.data.name}/>   
                  })
            }
           {/* <SidebarChat/>

           <SidebarChat/>

           <SidebarChat/>
           
           <SidebarChat/> */}


      </div>
    </div>
  )
}

export default Sidebar;