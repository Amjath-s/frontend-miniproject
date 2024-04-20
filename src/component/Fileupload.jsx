// import { useState } from "react"
// import axios from "axios";

// export function Fileupload()
// {
//     const [selectedfile,Setselectedfile]=useState(null);
   

//     const filetransfer=async (file)=>{
//         if(file)
//         {
//             console.log("fileselcted is",selectedfile)
//            const formdata=new FormData();
//            formdata.append('file',file);
//            try{
//             const resp= await axios.post('http://127.0.0.1:5000/postfile',formdata,{
//                 headers:{
//                     'Content-Type':'multipart/form-data'
//                 }           
//             }); 
//             console.log('file upaloded susceffule',resp.data)
//             if(resp.data.status==='success')
//             {  
//                 const filename=resp.data.filename
//                 console.log("filenmae",filename)
                
//                 axios.get('http://127.0.0.1:5000/scan',{
//                     params:{
//                         file_name:filename
//                     }
//                  })
//                 .then((apiResponse)=>{
//                     console.log('api response',apiResponse.data);

//                 })
//                 .catch((error)=>{
//                     console.error("error in api calling",error);
//                 })
//                 //  console.log("report",response)
              
//             }


//            }
//            catch(error){
//             console.log(error.status)

//            }
           



//         }

//     }
    

//    const fileload=(event)=>{
//     const file = event.target.files[0];
//     Setselectedfile(file);

//     }
//     const fileaction=()=>{
//         filetransfer(selectedfile)

//     }



//     return(
//         <>
//         <input type="file" onChange={fileload}></input>
//         <button onClick={fileaction}> clickme</button>
        
        
        
//         </>
    
//     )

// }