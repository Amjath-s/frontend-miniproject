import { useEffect, useState } from 'react';
import close from './image/close.svg';
import scanbutton from './image/scanbutton.svg';
import axios from 'axios';

export function Scanpopup({ onclose }) {
    const [filename, setFilename] = useState('');
    const [scanResult, setScanResult] = useState([]);
    const [isResult, setIsResult] = useState(false);

    const handleFilenameChange = (event) => {
        setFilename(event.target.value);
    };

    const scansent=(filename)=>{
                handleScan(filename);
            }
            const handlekeydown=(event)=>{
        
                if(event.key=='Enter')
                {
                    setFilename(event.target.value)
                    event.preventDefault();
                    
                    console.log("after key ",filename)
                    scansent()
                  
                    
        
                }
            }
        

    const handleScan = async () => {
        console.log(filename)
        try {
            const response = await axios.get('http://127.0.0.1:5000/scan', {
                params: {
                    file_name: filename + '.png'
                },
                headers:{
                        
                }
            });

            if (response.status === 200) {
                setScanResult(response.data);
                setIsResult(true);
            } else {
                console.error("Fetch failed:", response.status);
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    };

    useEffect(() => {
        console.log("Scan Result:", scanResult);
        
    }, [scanResult]);

    return (
        <>
            {!isResult ? (
                <div className="scanpopupbar">
                    <div className="closebutton" onClick={onclose}> 
                        <img src={close} alt="closebutton" />
                    </div>
                    <h3>SCAN </h3>
                    <div className="insidescanpop">
                        <input type="text" placeholder='enter filename' value={filename} onChange={handleFilenameChange} onKeyDown={handlekeydown}   />
                        <div className="scansearch" onClick={handleScan}>
                            <img src={scanbutton} alt="scanbutton" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="scanpopupbar">
                    <div className="closebutton"></div>
                    <div className="summarypreview">
                        {/* Your summary preview */}
                    </div>
                    <h4>summary</h4>
                    <p>{ scanResult}</p>
                </div>
            )}
        </>
    );
}







// import { useEffect, useState } from 'react'
// import  close from './image/close.svg'
// import scanbutton from './image/scanbutton.svg'
// import axios from 'axios';
// export function Scanpopup({onclose})
// {
//     const[filename,Setfilename]=useState( '' );
//     const[scanResult,setScanresult]=useState(null);
//     const[isResult,setIsresult]=useState(false);

    

//     const handlefilename=(events)=>{
//         Setfilename(events.target.value)
//         console.log(filename)
//     }
//     // const scansent=()=>{
//     //     handlescan(filename);
//     // }
//     // const handlekeydown=(event)=>{

//     //     if(event.key=='Enter')
//     //     {
//     //         Setfilename(event.target.value)
//     //         event.preventDefault();
//     //         console.log("after key ",filename)
//     //         scansent(filename)
            

//     //     }
//     // }

    
//     // const handlescan= (filename)=>{
//     //     console.log("the anme is ",filename)
//     //    const resp= axios.get('http://127.0.0.1:5000/scan',{
//     //         params:{
//     //             file_name:filename+'.png'
//     //         }
//     //     })
          
//     //     .then((apiResponse)=>{
//     //         console.log('api response',apiResponse.data)
//     //         Setscanresult(apiResponse.data);
//     //         console.log("scnaresult of api fetch",scanResult)
//     //     })

//     //     if(resp.status==200)
//     //     {
//     //         console.log("suceesull")
//     //     }  
//     // }


//     const handlescan= async (filename)=>{
//         console.log("the name is",filename)
//         try{
//             const response= await axios.get('http://127.0.0.1:5000/scan',
//         {
//             params:{
//                 file_name:filename+'.png'
//             }

//         } );

//         // if (response.status ==200) 
//         // {

//         //    const jsondata=response.data;
//         //     setScanresult(jsondata.jsonify())

//         //     // console.log(response.data);
//         //     // setScanresult(response.data);
//         //     setIsresult(true)
//         //     console.log("report",scanResult)
//         //   } else {
//         //     console.log("Fetch failed");
//         //   }
//           const json=response.data
//         } 
//         catch(error){
//             console.error("Error during fetch:", error);
//          console.error("Error response:", error.response);

//         }  
//      }

//     const scansent=(filename)=>{
//         handlescan(filename);
//     }
//     const handlekeydown=(event)=>{

//         if(event.key=='Enter')
//         {
//             Setfilename(event.target.value)
//             event.preventDefault();
            
//             console.log("after key ",filename)
//             scansent()
          
            

//         }
//     }

    


//     // useEffect(() => {
//     //     const handlescan = async (filename) => {
//     //       console.log("the name is", filename);
//     //       try {
//     //         const response = await axios.get('http://127.0.0.1:5000/scan', {
//     //           params: {
//     //             file_name: filename + '.png'
//     //           }
//     //         });
    
//     //         if (response.status === 200) {
//     //           const jsondata = response.data;
//     //         //   setScanresult(jsondata);
//     //           setIsresult(true);
//     //           console.log("report", scanResult);
//     //         } else {
//     //           console.log("Fetch failed");
//     //         }
//     //       } catch (error) {
//     //         console.error("Error during fetch:", error);
//     //         console.error("Error response:", error.response);
//     //       }
//     //     };
    
//     //     // Execute handlescan when filename changes
//     //     if (filename !== '') {
//     //       handlescan(filename);
//     //     }
//     //   }, [filename]);

     
     



//     // const summarypreview=()=>{
//     //     return(
//     //         <>
           
//     //         <div className="details">
//     //             {scanresult.title}
//     //         </div>
//     //         <div className="data">{scanresult.data}</div>
//     //         <div className="date">
//     //             {scanresult.dates}
//     //         </div>
//     //         <div className="summary">
//     //             {scanresult.summay}
//     //         </div>

//     //         </>
            

//     //     )
//     // }


//     useEffect(() => {
//         // console.log("Scan Result:",scanResult);
//         // if (scanResult) {
//         //     console.log("Summary:", scanResult.summary);
//         // }

      
//     }, [scanResult]);


//     return(
//         <>
    
      

//         {!isResult?(
//              <div className="scanpopupbar">
//             <div className="closebutton" onClick={onclose}> 
//             <img src= {close} alt="closebutton" />
//             </div>
//              <h3>SCAN </h3>
//            <div className="insidescanpop">
//              <input type="text"   placeholder='enter filename' value={filename} onChange={handlefilename} onKeyDown={handlekeydown} id='username' name='username ' autoComplete='off'/>
//                 <div className="scansearch">
//                <img src={scanbutton} alt="scanbutton"/>
                
//                 </div>
//              </div>

//          </div> 
    

//         ):(
//             <div className="scanpopupbar">
//                 <div className="closebutton">
//                 </div>
//                 <div className="summarypreview">
//                     {/* {summarypreview()} */}
//                 </div>
//                     <h4>summary</h4>
//                     {/* {summarypreview()} */}
                    
//                     {/* <h3> {scanResult.summary}   </h3> */}
//                 </div>
            
//         )}

     
//         </>
//     )
// }

///blackboc


// import { useEffect, useState } from 'react';
// import close from './image/close.svg';
// import scanbutton from './image/scanbutton.svg';
// import axios from 'axios';

// export function Scanpopup({ onclose }) {
//   const [filename, Setfilename] = useState(''); // Use a string instead of an array for a single filename
//   const [scanResult, Setscanresult] = useState(null); // Initialize with null or an appropriate default value
//   const [isResult, setIsresult] = useState(false);

//   const handlefilename = (events) => {
//     Setfilename(events.target.value);
//   };

//   const handlekeydown = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       handlescan(); // Call the function without passing filename since it's already in the state
//     }
//   };

//   const handlescan = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/scan', {
//         params: {
//           file_name: filename + '.png',
//         },
//       });

//       if (response.status === 200) {
//         Setscanresult(response.data);
//         console.log("respond",scanResult)
//         setIsresult(true);
//       } else {
//         console.log('Fetch failed');
//         // Handle the case where the fetch failed but the response status is not 200
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//       // Optionally handle the error state in the UI
//     }
//   };

//   const summarypreview = () => {
//     if (scanResult) {
//       return (
//         <>
//           <div className="details">{scanResult.title}</div>
//           <div className="data">{scanResult.data}</div>
//           <div className="date">{scanResult.dates}</div>
//           <div className="summary">{scanResult.summary}</div>
//         </>
//       );
//     } else {
//       return null; // Return null if scanResult is not available
//     }
//   };

//   useEffect(() => {
//     console.log('Scan Result:', scanResult);
//   }, [scanResult]);

//   return (
//     <>
//       {!isResult ? (
//         <div className="scanpopupbar">
//           <div className="closebutton" onClick={onclose}>
//             <img src={close} alt="closebutton" />
//           </div>
//           <h3>SCAN</h3>
//           <div className="insidescanpop">
//             <input
//               type="text"
//               placeholder="enter filename"
//               value={filename}
//               onChange={handlefilename}
//               onKeyDown={handlekeydown}
//               id="username"
//               name="username"
//               autoComplete="off"
//             />
//             <div className="scansearch" onClick={handlescan}>
//               <img src={scanbutton} alt="scanbutton" />
//             </div>
//           </div>
//         </div>
//       ) : (
//                   <div className="scanpopupbar">
//                       <div className="closebutton">
//                       </div>
//                     <div className="summarypreview">
//                          {/* {summarypreview()} */}
//                       </div>
//                           <h4>summary</h4>
//                           {/* {summarypreview()} */}
                          
//                          <p>{scanResult.summary}</p>
//                       </div>
                  
//               ) }
      
           
//               </>
//           )
//        }
      






// import { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
// import close from './image/close.svg'
// import scanbutton from './image/scanbutton.svg'

// export function Scanpopup({ onclose }) {
//   const [filename, Setfilename] = useState('')
//   const [isResult, setIsresult] = useState(false)

//   const { data: scanResult, isLoading, isError } = useQuery(
//     ['scanResult', filename],
//     async () => {
//       const response = await fetch(`http://127.0.0.1:5000/scan?file_name=${filename}.png`)
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       return response.json()
//     },
//     {
//       enabled: isResult,
//       refetchOnWindowFocus: false,
//     }
//   )

//   const handlefilename = (events) => {
//     Setfilename(events.target.value)
//     console.log(filename)
//   }

//   const scansent = () => {
//     setIsresult(true)
//   }

//   const handlekeydown = (event) => {
//     if (event.key === 'Enter') {
//       Setfilename(event.target.value)
//       event.preventDefault()
//       console.log('after key ', filename)
//       scansent()
//     }
//   }

//   useEffect(() => {
//     console.log('Scan Result:', scanResult)
//   }, [scanResult])

//   return (
//     <>
//       {!isResult ? (
//         <div className="scanpopupbar">
//           <div className="closebutton" onClick={onclose}>
//             <img src={close} alt="closebutton" />
//           </div>
//           <h3>SCAN </h3>
//           <div className="insidescanpop">
//             <input
//               type="text"
//               placeholder="enter filename"
//               value={filename}
//               onChange={handlefilename}
//               onKeyDown={handlekeydown}
//               id="username"
//               name="username "
//               autoComplete="off"
//             />
//             <div className="scansearch" onClick={scansent}>
//               <img src={scanbutton} alt="scanbutton" />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="scanpopupbar">
//           <div className="closebutton"></div>
//           <div className="summarypreview">
//             <h4>summary</h4>
//             {isLoading ? (
//               <p>Loading...</p>
//             ) : isError ? (
//               <p>Error: {error.message}</p>
//             ) : (
//               <p>{scanResult.summary}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   )
// }