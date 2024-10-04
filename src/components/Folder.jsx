import { useState } from "react";
import File from "./File";


export function Folder({ data, handleSelectedFile, selectedFile, handleFileRightClick }) {
    //const [explorerData, setExplorerData] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleState = (e) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
    return (
      <div 
      className="file-item folder"
        onClick={toggleState}
      >
        🗂️ {isOpen ? `⤵️`: `⤴️`} {data.name}
      {isOpen && data.data.map((node) => {
        {
          return node.data ? (
            <Folder
              key={node.id}
              data={node}
              handleSelectedFile={handleSelectedFile}
              selectedFile={selectedFile}
              handleFileRightClick={handleFileRightClick}
            />
          ) : (
            <File
              key={node.id}
              data={node}
              handleSelectedFile={handleSelectedFile}
              selectedFile={selectedFile}
              handleFileRightClick={handleFileRightClick}
            />
          );
        }
      })}
    </div>
    );
  }

  export default Folder;