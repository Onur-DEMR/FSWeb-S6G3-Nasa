import React, { useState } from "react";
import "./App.css";
import { dummyData } from "./dummyData";

const [dataKullan, setDataKullan] = useState(dummyData);

function App() {
  return (
    <div className="App">
    <h1>{dataKullan.title}</h1>
    <p>{dataKullan.explanation}</p>
    <img src={dataKullan.url} alt="" />
    <div className="date-content">
    <button>Azalt</button>
    <p>{dataKullan.date}</p>
    <button>Arttır</button>
    </div>
    <p>{dataKullan.copyright}</p>
    </div>
  );
}

export default App;
