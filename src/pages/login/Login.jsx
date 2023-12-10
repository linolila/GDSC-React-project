import './login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>

<span className='loginTitle'>Login</span>

<form className="loginform">
    <label>Email</label>
    <input className='logininput'type="text" placeholder='Enter your email...' />
    <label>Password</label>
    <input className='logininput' type="password" placeholder='Enter your password...' />
    <button className="loginbutton">Login</button>

</form>
<button className="loginregisterbutton">
  <Link className="link"to ='./register'>Register</Link>Register</button>
    </div>
  )
}
export default Login;