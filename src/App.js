import "./App.css";
import { useState } from "react";
import Papa from "papaparse";





function App() {
  
  const [parsedData, setParsedData] = useState([]);
   const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
  const [data,setData] = useState([])

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };
 
 const names = values.map((i)=>i[0])
 const newList = []
 names.map((each)=>{
 if(!newList.includes(each)){
    newList.push(each)
 }
})


 const obj = { code : "", name : '', stock : 0,deal : 0, free:0,mrp:0,rate:0,mrp:0}
 const store = []
 values.map((item)=>{
  if (obj.code === item[0]){
  
   console.log(item[3])
    obj.stock = (obj.stock+parseFloat(item[3]))
    if (obj.deal < item[4]){
      obj.deal = parseFloat(obj.deal)
    }
    else{
      obj.deal = item[4]
    } 
    if (obj.mrp > parseFloat(item[6])){
      obj.mrp = obj.mrp
    }
    else{
      obj.mrp = parseFloat(item[6])
    }
    if (obj.rate > parseFloat(item[7])){
      obj.rate = obj.rate
    }
    else{
      obj.rate = parseFloat(item[7])
    }
    
    

  }
  else {
   
    obj.code = item[0]
    obj.name = item[1]
    obj.stock = (obj.stock+parseFloat(item[3]))
    if (obj.deal < item[4]){
      obj.deal = item[4]
    }
    else{
      obj.deal = item[4]
    }
    if (obj.mrp > parseFloat(item[6])){
      obj.mrp = obj.mrp
    }
    else{
      obj.mrp = parseFloat(item[6])
    }
    if (obj.rate > parseFloat(item[7])){
      obj.rate = obj.rate
    }
    else{
      console.log(parseFloat(item[7]))
      obj.rate = parseFloat(item[7])
    }
    store.push(obj)
   
    
   
 
}
 })
 
 


 
 
  
 
  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        className="input__element"
        style={{ display: "block", margin: "10px auto" , marginTop:"50px"}}
      />

       <select className="select__button">
        {newList.map((i) =><option value="1">{i}</option>)}
       </select>

       
      
   

    </div>
  );
}

export default App;