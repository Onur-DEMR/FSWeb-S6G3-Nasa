import React from "react";

function Nasa(props){
    const {data, tarihiDegistir} = props;
    return(
    <>
    <h1>{data.title}</h1>
    <p>{data.explanation}</p>
    <img src={data.url} alt={data.title} />
    <div className="date-content">
    <button onClick={()=>tarihiDegistir(-1)}>Azalt</button>
    <p>{data.date}</p>
    <button onClick={()=>tarihiDegistir(1)}>Arttır</button>
    </div>
    <p>{data.copyright}</p>
    </>
    );
}
export default Nasa ;