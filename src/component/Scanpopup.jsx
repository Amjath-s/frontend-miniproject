import { useEffect, useState } from 'react';
import close from './image/close.svg';
import scanbutton from './image/scanbutton.svg';
import axios from 'axios';
import closebtn from './image/close.svg'


export function Scanpopup({ onclose }) {
    const [filename, setFilename] = useState('');
    const [scanResult, setScanResult] = useState({});
    const [isResult, setIsResult] = useState(false);

    useEffect(() => {
        console.log("compnent loaded")
    })

    const handleFilenameChange = (event) => {
        setFilename(event.target.value);
    };

    const scansent = (filename) => {
        handleScan(filename);
    }
    const handlekeydown = (event) => {

        if (event.key == 'Enter') {
            setFilename(event.target.value)
            event.preventDefault();

            console.log("after key ", filename)
            scansent()



        }
    }


    const handleScan = async () => {



        const response = axios.get('http://127.0.0.1:5000/scan', {
            params: {
                file_name: filename
            },
        }).then((response) => {
            console.log(response.data)
            console.log("response.summary", response.summary)
            setIsResult(true)
            // setScanResult([JSON.stringify(response.data)])
            setScanResult(response.data)


        }).catch((error) => {
            console.log(error)
        })
    }

    //     if (response.status === 200) {
    //         setScanResult(response.data);
    //         setIsResult(true);
    //     } else {
    //         console.error("Fetch failed:", response.status);
    //     }
    // } 
    // catch (error) {
    //     console.error("Error during fetch:", error);
    // }


    // useEffect(() => {
    //     console.log("Scan Result:", scanResult);

    // }, [scanResult]);
    return <>
        {isResult ? (
            <>
                {console.log("Hey")}
                {console.log("file",filename)}
                <div className="summaryview">
                    <div className="closebutton " onClick={onclose}>
                        <img src={closebtn} alt='close'></img>
                    </div>
                    
                    <div className="">
                        {/* Your summary preview */}
                    </div>
                    <h4>Result</h4>
                    <div className="viewfilename">
                        <p>{[filename]}</p>
                    </div>
                    {console.log("scanned", scanResult)}
                    <div className="fetchedinfo">
                        <h4> Important data</h4>
                        {scanResult[filename].data.map((item,index)=>(
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div className="fetchedinfo">
                        <h4>Important date's </h4>
                        {scanResult[filename].dates?(
                            scanResult[filename].dates.map((dates,index)=>(
                                <p key={index}>{dates.description}:{dates.value}</p>
                            ))
                        ):(<p> No Important Dates</p>)}




                        {/* {scanResult[filename].dates.map((date,indexs)=>(
                            <p key={indexs}>{date.description}:{date.value}</p>
                        ))} */}
                    </div>
                    <div className="fetchedinfo">
                        <h4>Summary</h4>
                        <p>{scanResult[filename].summary}</p>
                    </div>
{/* 
                    <p>{scanResult[filename].summary}</p>

                    <p>{scanResult[filename].data}</p> */}
                </div>
            </>
        ) : (
            <>
                {console.log("HiHi")}
                <div className="scanpopupbar">
                    <div className="closebutton" onClick={onclose}>
                        <img src={closebtn} alt="closebutton" />
                    </div>
                    <h3>SCAN </h3>
                    <div className="insidescanpop">
                        <input type="text" placeholder='enter filename' value={filename} onChange={handleFilenameChange} onKeyDown={handlekeydown} />
                        <div className="scansearch" onClick={handleScan}>
                            <img src={scanbutton} alt="scanbutton" />
                        </div>
                    </div>
                </div>
            </>
        )}
    </>

}




