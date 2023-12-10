import React from 'react'
import './sidebar.css';
export default function Sidebar() {
  return (
    <div className='sidebar'>
<div className='sidebarItem'>
    <span className='sidebarTitle'>ABOUT ME</span>
    <img src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'width='40px' />
    <p>Lorepusmn ktngtryijotr</p>
<span className='sidebarTitle'>CATEGORIES</span>
    <ul className='sidebarList'>
        <li className='sidebarListsItem'>
Life
        </li>
        <li className='sidebarListsItem'>
Music
        </li>
        <li className='sidebarListsItem'>
Cinema
        </li>
        </ul>
    </div>
    <div className='sidebarItem'>
    <span className='sidebarTitle'>Follow Us</span>
    <div className='sidebarSocial'>
    <i  class="topIcon fa-brands fa-facebook"></i>
                <i class="sidebarIcon topIcon fa-brands fa-twitter"></i>
                <i  class="sidebarIcon topIcon fa-brands fa-instagram"></i>
                <i class="sidebarIcon topIcon fa-brands fa-linkedin">
                    </i>
        </div>
    </div>
</div>
  )
}
