import  './write.css'

function Write() {
  return (
    <div className='write'>
    <img className='writeimg' src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
<form className="writeform">


    <div className="writeformgroup">
        <label htmlFor="fileInput">
            <i className="writeicon fas fa-plus"></i>
            </label>
<input type="file" id='fileInput' style="display:none;" className='writeinput'/>
<input type="text" placeholder='Title' className='writeinput' autoFocus={true} />


        </div>
        <div className="writeformgroup">
            <textarea placeholder='Tell your story...' type='text'className='writetext'></textarea>
            </div>
            <button className="writesubmit">Publish</button>
    </form>


    </div>
  )
}
export default Write;