import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD1aLeT3HpKLGz8v9DC0yZzEhAtONRLwE8",
  authDomain: "whatsapp-clone-yt-af414.firebaseapp.com",
  projectId: "whatsapp-clone-yt-af414",
  storageBucket: "whatsapp-clone-yt-af414.appspot.com",
  messagingSenderId: "919568642043",
  appId: "1:919568642043:web:bdfbc8412d645aa912655e"
};

//     // this line of code connect everything

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  
 
// //   this is for database connection

  const db = firebaseApp.firestore();

  export default db;