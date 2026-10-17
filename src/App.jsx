import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [sport, setSport] = useState('');
  const [brand, setBrand]  = useState('');

  const[sports,setSports] = useState([]);

  useEffect(()=>{
    axios.get('https://71db67193d074d2ab316130aa655fbab-oas.api.mockbin.io/rackets').then((response)=>{
    setSports(response.data)
  });
  },[])
  
  
  const sportBrand = {
    tenis: ["Wilson", "Head", "Babolat"],
    padel: ["Nox", "Siux", "BullPadel"],
    tableTennis: ["Butterfly", "Stiga", "Donic"],
    badminton: ["Yonex", "Victor", "Li-Ning"]
  }

  function changeSport(event) {
    setSport(event.target.value)
  }

  function changeBrand(event){
    setBrand(event.target.value)
  }


  return (
    <>
      <h1>RACKET SHOP</h1>

      <label>Choose a sport:</label>
      {/*PRVI DROP DOWN*/}
      <select onChange={changeSport} value={sport}>
        <option value="" disabled hidden>Choose a sport</option>
        <option value='tenis'>Tenis</option>
        <option value='padel'>Padel</option>
        <option value='tableTennis'>Table Tennis</option>
        <option value='badminton'>Badminton</option>
      </select>

      {sport && <p>Trenutno izabrani sport je {sport}</p>}

      
      {/*DRUGI DROP DOWN*/}
      {sport && (
        <>
          <label>Choose a brand: </label>

          <select value={brand} onChange={changeBrand}>
            <option value="" disabled hidden>
              Choose a brand
            </option>

            {sportBrand[sport].map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </>
      )}
      
      {brand && <p>Trenutno izabrani brand je {brand}</p>}

      {sports.map((item)=>{
        return(
          <p key = {item}>{item}</p>
        );

      })}
      
      

    </>
  );
}

export default App
