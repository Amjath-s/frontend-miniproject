import { faCloudArrowUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import svgimage from './image/upload.svg'
import scan from './image/scan.svg'
import browse from './image/browse.svg'
import { useState } from "react";

import { Uploadpopup } from "./Uploadpopup";
// import { Scanpopup } from "./Scanpopup";
import { Browsepop } from "./Browsepop";
import { Scanpopup } from "./Scanpopup";



export function Filemanager() {
    const [popstate, Setpopupsate] = useState(false)
    const [scanpop, Setscanpop] = useState(false)
    const [browsepop, Setbrowsepop] = useState(false)

    const fileaction = () => {
        Setpopupsate(true)




    }
    const hanldepopclose = () => {
        Setpopupsate(false)
        Setscanpop(false)
        Setbrowsepop(false)

        console.log("closed popup")


    }
    const filebrowse = () => {
        Setbrowsepop(true)

    }
    const filescan = () => {
        Setscanpop(true);
        console.log("Hi");
        console.log(scanpop)
    }

console.log(scanpop)

    return (
        <>
            <div className="filemanager">
                <div className="inner-filemanager">
                    <div className="container" onClick={fileaction}>
                        <img src={svgimage} alt="svg" />
                        UPLOAD
                    </div>
                </div>
                <div className="inner-filemanager">
                    <div className="container" onClick={() => { filescan() }}>
                        <img src={scan} alt="" />
                        SCAN
                    </div>
                </div>
                <div className="inner-filemanager">
                    <div className="container" onClick={filebrowse}>
                        <img src={browse} alt="browse" />
                        BROWSE
                    </div>
                </div>
                {popstate && (<Uploadpopup onclose={hanldepopclose} />)}
                {scanpop && (<Scanpopup onclose={hanldepopclose} />)}
                {browsepop && (<Browsepop  onclose={hanldepopclose}/>)}

            </div>


        </>



    )

}