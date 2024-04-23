import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import axios from "axios"
import { useEffect, useState } from "react"
// import '../App.css'

export function Recent()
{
    const [dates, newDates] = useState([]);


    // const datefetch=async()=>{
    //     const dateresponse = axios
    //       .get("http://127.0.0.1:5000/gettrackeddates")
    //       .then((dateresponse) => {
    //         console.log("response by date", dateresponse.data);
    //         newDates(dateresponse.data);
    //         console.log("dates in ",dates[5]);
    //       }).catch((error)=>{
    //         console.log("error in fetchign",error)
    //       })
       

    // }
    useEffect(()=>{
          const datefetch = async () => {
            const dateresponse = axios
              .get("http://127.0.0.1:5000/gettrackeddates")
              .then((dateresponse) => {
                console.log("response by date", dateresponse.data);
                newDates(dateresponse.data);
                console.log("dates in ", dates[5]);
              })
              .catch((error) => {
                console.log("error in fetchign", error);
              });
          };
          datefetch()
    
    })

    return (
      <>
        <div className="filedatedisplay">
          <div className="viewall">
            <a href=""> viewall</a>
         
            <table>
              <thead>
                <tr className="tablerow">
                  <th className="tablehead"> Description</th>
                  <th className="tablehead"> Filename</th>
                  <th className="tablehead"> Date</th>
                </tr>
              </thead>
              <tbody>
                {dates.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <th>{item.description}</th>
                    <th> {item.file_name}</th>
                    <th> {item.value}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div> <button onClick={datefetch} className="datedisplaybtn"> click here</button></div> */}
        </div>

        {/* <h4>jflkf</h4>
        <p>fsjgljlglsmlvjh</p> */}
      </>
    );
}
