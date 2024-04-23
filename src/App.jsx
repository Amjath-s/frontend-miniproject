import "./App.css";
import { Filemanager } from "./component/Filemanager";
import { Recent } from "./component/Recent";

import { Sidebar } from "./component/Sidebar";





function App() {
  return (
    <>
      <div className="main ">
        <Sidebar />
        {/* <Search/> */}
        <Filemanager />
        {/* <Sidebar/> */}
        <Recent />
      
      </div>
    </>
  );
}

export default App;
