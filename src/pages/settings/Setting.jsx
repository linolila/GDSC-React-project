import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar';
 function Setting() {
  return (
    <div className='setting'>

        <div  className='settingwrapper'>
            <div className="settingtitle">
                <span className="settingupdate">Update your account</span>
                <span className="settingdelete">Delete account</span>

            </div>
            <form className="settingform">
                <label>Profile Picture</label>
                <div className="settingpp">
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingppicon far fa-user-circle"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                    <label> Username</label>
                    <input type="text" placeholder='Username' />
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                    <button className="settingsubmit">Update</button>
               </div> </form>

            </div>
        <Sidebar/>
    </div>
  )
}
export default Setting;