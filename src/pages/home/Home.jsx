import React from 'react'
import Header from '../../components/header/Header';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import { Singlepost } from '../../components/singlepost/Singlepost';

 function Home() {
  return (<>
   <div className='home'>
        <Header/>
        <div className="y">
         
          <Posts/>
          
          <Singlepost/>
        </div>
        
    </div></>
   
  )
}
export default Home;
