import { useEffect, useState } from "react";
import axios from "axios";
import DisplayRackets from "./DisplayRackets"

function HomePapge() {

    const [sport, setSport] = useState('');
    const [sports, setSports] = useState([]);

    const [rackets, setRackets] = useState([]);
    const [brand, setBrand] = useState('');

    const brands = [...new Set(rackets.map((racket) => (racket.brand)))];

    // PRVI DOHVAT REKETA
    useEffect(() => {
        axios
            .get('https://71db67193d074d2ab316130aa655fbab-oas.api.mockbin.io/rackets')
            .then((response) => {
                setSports(response.data)
            });
    }, [])

    // DRUGI DOHVAT REKETA
    useEffect(() => {
        if (!sport) {
            return;
        }
        axios
            .get(`https://71db67193d074d2ab316130aa655fbab-oas.api.mockbin.io/rackets/${sport}`)
            .then((response) => {

                setRackets(response.data)
            })
    }, [sport])

    function changeSport(event) {
        setSport(event.target.value);
        setBrand('');
    }

    function changeBrand(event) {
        setBrand(event.target.value);
    }

    // PRIKAZ REKETA
    let racketsToDisplay = rackets;
    if (brand){
        racketsToDisplay = rackets.filter((racket)=>{
            return(
                racket.brand===brand
            );
        })
    }

    return (
        <>

            <h1>RACKET SHOP</h1>
            <label>Choose a sport:</label>

            {/*PRVI DROP DOWN*/}
            <select onChange={changeSport} value={sport}>
                <option value="" disabled hidden>
                    Choose a sport
                </option>

                {sports.map((item) => {
                    let displayName;

                    if (item === "tableTennis") {
                        displayName = "Table Tennis";
                    } else {
                        displayName = item.charAt(0).toUpperCase() + item.slice(1)
                    }
                    return (
                        <option key={item} value={item}>
                            {displayName}
                        </option>
                    );
                })}

            </select>

            
            
            {/* DRUGI DROP DOWN */}
            {sport && (
                <>
                    <label>Choose a brand: </label>

                    <select onChange={changeBrand} value={brand}>
                        <option value="" disabled hidden>
                            Choose a brand
                        </option>

                        {brands.map((item) => {
                            return (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                </>
            )}
            
            <DisplayRackets rackets = {racketsToDisplay}/>
            
            
        </>
    );
}

export default HomePapge