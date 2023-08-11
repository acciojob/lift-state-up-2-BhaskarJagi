
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child";
import Parent from "./Parent";

const App = () => {

  let [text,setText] = useState("")

  return (
    <div>
        <Parent text={text}>
          <Child setText={setText}/>
        </Parent>
    </div>
  )
}

export default App
