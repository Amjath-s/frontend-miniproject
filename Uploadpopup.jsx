import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import files from './image/file.svg'
import buttonupload from './image/button.svg'
import closebutton from './image/close.svg'
import { useState } from "react"

export function Uploadpopup({onclose})
{
    const[selectedfile,Setselectedfile]=useState(null)
    const[fileuploaded,Setfileuploaded]=useState(false)
    const handlefileupload=async(file)=>{

        if(file)
        {
            console.log('the file slected to send to api',file)
            const formdata=new FormData();
            formdata.append('file',file);
            try{

                const uploadfile= await axios.post('http://127.0.0.1:5000/postfile',formdata,{
                    header:{
                        'Content-Type':'multipart/form-data'

                    }  
                })

                console.log('the uploading result is ',uploadfile.data)
                if(uploadfile.data.status==='success')
                {
                    window.alert("file added succesfully")
                    setTimeout(() => {
                        Setselectedfile(false);
                      Setfileuploaded(false);
                        
                    }, 1000);


                }
                // Setselectedfile(false);
                // Setfileuploaded(false);
            }
            catch(error)
            {console.log("error")}

        }

    }
    const fileupload=(event)=>{
        const files=event.target.files[0];
        Setselectedfile(files)
        console.log(files)
        Setfileuploaded(true)

    }
    const filedrop=(events)=>{
        events.preventDefault();
        const files=events.dataTransfer.files;
        if(files.length>0)
        {
           const  file=files[0];
           Setselectedfile(file)
           console.log("selected file from drop ",file)
           Setfileuploaded(true)
        }
    }
     const filedrag=(event)=>{
        event.preventDefault();
     }
     const handleupload=()=>{
        handlefileupload(selectedfile)

     }
     const filepreview=()=>{
        if(selectedfile)
        {
            console.log("selected file in in if ",selectedfile.name)
            return(
                <img src={files} alt="file" />
            )
        }

     }
    return(
        <>
       
        <div className="uploadpop">
            <div className="closebutton">
                <img src={closebutton} alt="close"  onClick={onclose}/>
                
            </div>
            {/* <img src={files} alt="" className="closebutton" /> */}
            <h3>Fileupload</h3>
            {fileuploaded ? (
            <div className="uploadpreview">
            <div className="fileview">  {filepreview()}
            <span>{selectedfile.name}</span>
            </div>
            <div className="buttonupload" onClick={handleupload}>
              <img src={buttonupload} alt="" /> 
            </div>
            </div>
        ) : (
          <div className="fileupload" onDrop={filedrop} onDragOver={filedrag}>
            <p>--Drop File Here--</p>
            <p>-or-</p>
            <input type="file" onChange={fileupload} id="fileselect" className="input"/>
            <label htmlFor="fileselect">Select File</label>
          </div>
        )}
        </div>
       
        </>
    )
}