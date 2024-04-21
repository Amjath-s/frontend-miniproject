import axios from "axios";
import { useEffect, useState } from "react";

export function Browsepop()
{
    const [searchQuery, setSearchQuery] = useState('');
    const [files, setFiles] = useState([]);
    const [filteredFiles, setFilteredFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:5000/getscannedfiles'); // Adjust the URL if needed
          setFiles(response.data);
        } catch (error) {
          console.error('Error fetching files:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      // Filter files based on search query
      const filtered = filteredFiles.filter(file =>
        file.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFiles(filtered);
    }, [searchQuery, files]);
  
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleFileClick = (file) => {
      setSelectedFile(file);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && selectedFile) {
        // Handle displaying details of selected file
        console.log('Selected file:', selectedFile);
      }
    };
  
    return (
      <div className="browsepopup">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search files..."
        />
        <ul>
          {filteredFiles.map((file) => (
            <li
              key={file.title}
              onClick={() => handleFileClick(file)}
              onKeyDown={handleKeyPress}
              tabIndex={0}
            >
              {file.title}
            </li>
          ))}
        </ul>
      </div>
    );



}