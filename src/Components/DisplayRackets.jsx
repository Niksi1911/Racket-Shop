import "./DisplayRackets.css";
import { Link } from "react-router";

function DisplayRackets({ rackets }) {

    return (
        <>
            {rackets.map((racket) => {
                return (
                    <div className="racketsDisplay" key={racket.id}>
                        <span>{racket.name}</span>
                        
                        <Link to={`/details/${racket.id}`} state={{ racket }}>
                            <button>INFO</button>
                        </Link>
                        
                    </div>
                );
            })}
        </>
    );
}

export default DisplayRackets