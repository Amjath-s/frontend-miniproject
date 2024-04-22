import { useEffect, useState } from 'react';
import close from './image/close.svg';
import scanbutton from './image/scanbutton.svg';
import axios from 'axios';


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
                file_name: filename + '.png'
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
                <div className="scanpopupbar">
                    <div className="closebutton"></div>
                    <div className="summarypreview">
                        {/* Your summary preview */}
                    </div>
                    <h4>summary</h4>
                    {console.log("scanned", scanResult)}
                    <p>{scanResult["100.png"].summary}</p>
                    <p>{scanResult["100.png"].data}</p>

                    {/* {scanResult && Object.keys(scanResult).map((key) => (
                        <div key={key}>
                            <h2>{scanResult[key].title}</h2>
                            <p><strong>Summary:</strong> {scanResult[key].summary}</p>
                            <h3>Data:</h3>
                            <ul>
                                {scanResult[key].data.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))} */}


                </div>
            </>
        ) : (
            <>
                {console.log("HiHi")}
                <div className="scanpopupbar">
                    <div className="closebutton" onClick={onclose}>
                        <img src={close} alt="closebutton" />
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




