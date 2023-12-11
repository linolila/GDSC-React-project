import './topbar.css'
import {Link} from 'react-router-dom'

export default function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className='topLeft'> 
               <i  class="topIcon fa-brands fa-facebook"></i>
                <i class="topIcon fa-brands fa-twitter"></i>
                <i  class="topIcon fa-brands fa-instagram"></i>
                <i class="topIcon fa-brands fa-linkedin">
                    </i>
                    </div>
            <div className='topCenter'>

<ul className='topList'>
    <li className='topListItem'>
        <Link to='/' className="link">HOME</Link></li>
    <li className='topListItem' ></li>
    <li className='topListItem'><Link className="link" to= '/contact'>CONTACT</Link></li>
    <li className='topListItem'><Link className="link" to= '/write'>WRITE</Link></li>
    <li className='topListItem'>{user && 'LOGOUT'}</li>
    </ul>



            </div>
            <div className='topRight'>
                {user ?( <img className='topImg' src= "./assets/img.jpg"></img>) :
                (
                <ul className='topList'>
                    
                    <li className='topListItem'><Link className='link' to='/login'>
                LOGIN   </Link></li>
                <li className='topListItem'><Link className='link' to='/register'>
                Register  </Link></li>
                </ul> )}
               
                <i class="topsearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
