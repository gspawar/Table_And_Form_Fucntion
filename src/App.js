import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import TableForm from "./Components/TableForm";
import GetInputFrom from "./Components/GetInputFrom";

function App() {

  const [currentData , setcurrentData] = useState([]);

  const [myFilter , setMyFilter] = useState("Filter By");
  const [input , setInput] = useState("");


  useEffect(() => {
    const data = localStorage.getItem("currentData");
    if(data) {
      setcurrentData(JSON.parse(data));
    }
  } , []);

  useEffect(() => {
    localStorage.setItem("currentData" , JSON.stringify(currentData));
  } , [currentData]);



  const dataFromGetInput = (myData) => {
      setcurrentData((prevState) => {
        return [myData , ...prevState];
      });
  }

  const dataFromSearchbBar = (dataSB) => {
      setMyFilter(dataSB);
      
  }

  const dataFromSearchBy = (newData) => {
      setInput(newData);
  }

  return (
    <div>
        <SearchBar onDataGetTwo = {dataFromSearchbBar} onDataGetThree = {dataFromSearchBy} defaultFilter = {myFilter}/>
        <TableForm array = {currentData} filter = {myFilter} value = {input}/>
        <GetInputFrom onGetData = {dataFromGetInput }/>
    </div>
  );
}

export default App;
