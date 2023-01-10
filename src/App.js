import React, {useState, useEffect} from "react";
import {dummyData} from "./dummyData";
import "./App.css";
import axios from "axios";



function App() {

  const [data, setData] = useState(dummyData);
  const [tarih, setTarih] = useState("2021-01-10");
  useEffect(()=>{
    axios .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+tarih)
    .then((a)=>{
      setData(a.data);
    });
  }, [tarih]);

  return (
    <div className="App">
    <h1>{data.title}</h1>
    <p>{data.explanation}</p>
    <img src={data.url} alt={data.title} />
    <div className="date-content">
    <button onClick={()=>setTarih("2020-01-10")}>Azalt</button>
    <p>{data.date}</p>
    <button onClick={()=>setTarih("2023-01-10")}>Arttır</button>
    </div>
    <p>{data.copyright}</p>
    </div>
  );
}

export default App;
