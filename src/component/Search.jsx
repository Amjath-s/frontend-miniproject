import { faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Search()
{
    return(
        <>
        <div className="search-bar-outer">    

        <div className="inner-outer-bar"> 
       <input type="text" className="searchbar" placeholder="search"/>
       </div>
       </div>
       
        </>
    )

}