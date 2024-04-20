import { faCloudArrowUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import svgimage from './image/upload.svg'
import scan from './image/scan.svg'
import { useState } from "react";

import { Uploadpopup } from "./Uploadpopup";



export function Filemanager()
{
    const [popstate,Setpopupsate]=useState(false)
    const fileaction=()=>{
        Setpopupsate(true)


    }
    return(
        <>
        <div className="filemanager">
            <div className="inner-filemanager"> 
            <div className="container"onClick={fileaction}>
            {/* <FontAwesomeIcon icon={faCloudArrowUp} className="filemanager-icons"/> */}
            <img src={svgimage} alt="svg" />
            UPLOAD
             </div>
            </div>
            <div className="inner-filemanager">
            <div className="container">
           <img src={scan} alt="" />
            SCAN
             </div>
            </div>
            <div className="inner-filemanager">
            <div className="container">
            <FontAwesomeIcon icon={faCloudArrowUp} className="filemanager-icons"/>
            BROWSE
             </div>
            </div>
            {popstate&&(<Uploadpopup/>)}

             </div>
        
        
        </>
        
    

    )
    
}