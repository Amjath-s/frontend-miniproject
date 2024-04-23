import axios from "axios";
import { useEffect, useState } from "react";
import close from './image/close.svg'
export function Browsepop({onclose}) {
  const [files, setFiles] = useState([]);

  const fetchdata = async () => {
    const response = await axios
      .get("http://127.0.0.1:5000/getfiles")
      .then((response) => {
        console.log(response.data);
        setFiles(response.data);
        console.log("show file", files);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div className="browsepopup">
      <div className="closebutton" onClick={onclose}>
        <img src={close} alt="" />
      </div>
      <input type="text" name="" id=""  placeholder="search here"/>
      <h4> Browse Files</h4>
     {files.map((filename,index)=>(
      <p key={index}>{filename}</p>
     ))}
    </div>
  );
}
