import { useState } from "react";

export function File({ data, handleSelectedFile, selectedFile, handleFileRightClick }) {
    
    const handleSelection = (e) => {
        e.stopPropagation();
        handleSelectedFile(data);
    }

    const isFolder = data.type === "folder";
    const isSelected = selectedFile === data && !isFolder;
    console.log("FILE", selectedFile);
    return (
        <div
            className={`file-item file ${
                isSelected ? "selected" : ""
              }`}
            onClick={handleSelection}
            onContextMenu={(event) => handleFileRightClick(event, data)}
        >
            📃: {data.name}
        </div>
    );
}

export default File;