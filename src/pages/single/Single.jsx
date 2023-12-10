import './single.css'
import { Singlepost } from '../../components/singlepost/Singlepost';
import Sidebar from '../../components/sidebar/Sidebar';
export const Single = () => {
  return (
    <div className='single'>
<Singlepost/>
        <Sidebar/>
    </div>
  )
}
