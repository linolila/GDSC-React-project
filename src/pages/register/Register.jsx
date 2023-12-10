import './register.css'
import { Link } from 'react-router-dom'
 function Register() {
  return (
    <div className='register'>

<span className='registerTitle'>Register</span>

<form className="registerform">
<label>Username</label>
    <input className='registerinput'type="text" placeholder='Enter your username...' />
    <label>Email</label>
    <input className='registerinput'type="text" placeholder='Enter your email...' />
    <label>Password</label>
    <input className='registerinput' type="password" placeholder='Enter your password...' />
    <button className="registerbutton">Register</button>

</form>
<button className="registerloginbutton"><Link className='link'>Login</Link></button>
    </div>
  )
}export default Register;
