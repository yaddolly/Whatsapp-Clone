import React, { useEffect,useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import "./css/Chat.css"
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useParams } from 'react-router-dom';

function Chat() {

    const { roomId } = useParams();

    const [roomName, setRoomName] = useState("");
    const[input,setInput] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() =>{
          if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot=>{
                setRoomName(snapshot.data().name);//show rooms name
            }) ;    
            db.collection("rooms").doc(roomId).collection("message").orderBy("timestamp","asc").onSnapshot(snapshot=>{
                setMessages(snapshot.docs.map(doc=>doc.data()));//show rooms messages
            }) ;    
        }
    },[roomId])
  
    const sendMessage=(e) => {
       e.preventDefault();//stop the by default page refressing 
       if(input === ""){
        return alert("please enter your message");
       }
       db.collection("rooms").doc(roomId).collection("message").add({
        name:"Dolly",
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
       });
       setInput("");
    }

  return (
    <div className="Chat">
        <div className="Chat_header">
            <Avatar/>
        <div className="Chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen..</p>
        </div>
        <div className="header_right">
            <IconButton>
                <SearchIcon/>
            </IconButton>

            <IconButton>
                <AttachFileIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
        </div>

        <div className="Chat_body">
          {
            messages.map(message=>(
                <p className='Chat_message  Chat_reciver'> 
                   <span className='Chat_name'>{message.name}</span>
                         {message.message}    
                   <span className='Chat_time'>
                        {
                           new Date(message.timestamp?.seconds*1000).toLocaleTimeString()

                         }    
                   </span>
            </p>
            ))
          }
        </div>
      

      <div className="Chat_footer">
           <EmojiEmotionsIcon/>
           <AttachFileIcon/>
           <form onSubmit={sendMessage}>
              <input type="text" value={input} placeholder="Type your message" onChange={e =>setInput(e.target.value)}/>
              <input type="submit"/>
           </form>
           < MicIcon />
      </div>
    </div>
  )
}

export default Chat;
