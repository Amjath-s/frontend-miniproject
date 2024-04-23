import { faAddressBook, faFile, faMessage, faUser  } from "@fortawesome/free-regular-svg-icons";
import { faGears, faHouse } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export function Sidebar()
{
    return(
        <>
        <div className="sidebar">
         <h4> <FontAwesomeIcon icon={faFile} className="fonticonalign" /> DOCINTELLIGENCE</h4>
            <ul>
                <li> <FontAwesomeIcon icon={faHouse} className="fonticonalign"/>Home</li>
                <li> <FontAwesomeIcon icon={faUser} className="fonticonalign" />User</li>
                <li> <FontAwesomeIcon icon={faAddressBook} className="fonticonalign"/> About Us</li>
                <li> <FontAwesomeIcon icon={faMessage} className="fonticonalign"/> Notification</li>
                <li> <FontAwesomeIcon icon={faGears} className="fonticonalign"/> Settings</li>
            </ul>
            





        </div>
   
        
        
        
        
        </>
    )
}