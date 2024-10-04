import FileExplorer from "./components/FileExplorer";
import { data } from "./data/data";
import "./App.css";

export default function App() {
  
  return (
    <div className="App">
      <h3> File Explorer </h3>
      <FileExplorer data={data} />
    </div>
  );
}
