
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
     
        <div className="App">
          <div className="app_body">
             

              <Sidebar/>
        
              <Routes>
                  <Route exact path='/' element={<Chat/>}></Route>
                  <Route path='/room/:roomId' element={<Chat/>}></Route>
              </Routes>
          </div>
        </div>
       
     </BrowserRouter>
     </React.StrictMode>
  );
}

export default App;
