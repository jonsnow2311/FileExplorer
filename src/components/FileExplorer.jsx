import { useState, useRef, useEffect } from "react";
import Folder from "./Folder";

export default function FileExplorer({
  data
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const updateSelectedFile = (file) => {
    setSelectedFile(file);
  }

  const contextMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target)
      ) {
        handleContextMenuClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contextMenuRef]);

  const handleFileRightClick = (event, file) => {
    event.preventDefault();
    setSelectedFile(file);

    const x = event.clientX;
    const y = event.clientY;

    contextMenuRef.current.style.display = "block";
    contextMenuRef.current.style.left = `${x}px`;
    contextMenuRef.current.style.top = `${y}px`;
  };

  const handleContextMenuClose = () => {
    contextMenuRef.current.style.display = "none";
  };

  const handleCopy = () => {
    console.log("Copying file:", selectedFile.name);
  };

  const handleDelete = () => {
    console.log("Deleting file:", selectedFile.name);
  };

  const handleRename = () => {
    console.log("Renaming file:", selectedFile.name);
  };

  return (
    <div className="file-explorer">
      <Folder
        data={data}
        handleSelectedFile={updateSelectedFile}
        selectedFile={selectedFile}
        handleFileRightClick={handleFileRightClick}
      />
      <div
        ref={contextMenuRef}
        className="context-menu"
        onClick={handleContextMenuClose}
        onBlur={handleContextMenuClose}
      >
        <span onClick={handleCopy}>Copy</span>
        <span onClick={handleDelete}>Delete</span>
        <span onClick={handleRename}>Rename</span>
      </div>
    </div>
  );
}
