
 import './App.css'
import { Filemanager } from './component/Filemanager'
import { Search } from './component/Search'

import { Sidebar } from "./component/Sidebar"

// import { Fileupload } from "./component/Fileupload"


function App() {
  


  return (
    <>
    <div className='main '>
    <Sidebar/>
    {/* <Search/> */}
    <Filemanager/>

    {/* <Sidebar/> */}
    </div>

     

    </>
  )
}

export default App
