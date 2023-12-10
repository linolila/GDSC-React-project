import React from 'react';
import Topbar from './components/topbar/Topbar';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import {Single }from './pages/single/Single';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


import {
    createBrowserRouter,
    Route,Router,
    RouterProvider,
  } from "react-router-dom"; 
  

function App() {
    const user =false;

    return (
       <Router>
        <Topbar/>
        <switch>
<Route exact path="/" component={<Home/>}/>


<Route path="/register" component={user ? <Home/>:<Register/>}/>


<Route  path="/login "component={user ? <Home/>:<Login/>}/>


<Route  path="/write" component={user ? <Write/>:<Register/>}/>



    
<Route  path="/setting" component={user ? <Setting/>:<Register/>}/>


<Route  path="/post/:postid" component={<Single/>}/>


        </switch>
       </Router>
          
      

        
    );
}
export default App;
