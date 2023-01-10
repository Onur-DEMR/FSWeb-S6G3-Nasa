import React, {useState, useEffect} from "react";
import {dummyData} from "./dummyData";
import "./App.css";
import axios from "axios";
import Nasa from "./Nasa/Nasa";



function App() {

  const [data, setData] = useState(dummyData);
  const [tarih, setTarih] = useState("2021-01-10");
  useEffect(()=>{
    axios .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+tarih)
    .then((a)=>{
      setData(a.data);
    });
  }, [tarih]);

function tarihiDegistir(gunler){
  let gun = new Date (tarih);
  gun.setDate(gun.getDate()+gunler);
  let stringTarih = gun.getFullYear() + "-" + gun.getMonth()+1 + "-" + gun.getDate() ;
  setTarih(stringTarih);
}

  return (
    <div className="App">
    <Nasa data = {data} dönüştürücü = {tarihiDegistir()} />
    </div>
  );
}

export default App;
