import React from 'react'
import './App.css';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';




import {Route,Switch} from "react-router-dom";
import Navber from './components/Navber';

function App() {
  return (
    <>
    <Navber/>
    <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/Rooms/" component={Rooms}/>
   <Route exact path="/Rooms/:slug" component={SingleRoom}/>
   <Route component={Error}/>
   </Switch>
   
    </>
  );
}

export default App;
