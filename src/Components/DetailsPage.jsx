import { useLocation } from "react-router";
import Details from "./Details";

function DetailsPage(){
    const location = useLocation();
    const racket = location.state?.racket;
    return(
        <>
            <Details racket = {racket}></Details>
        </>
    );

}

export default DetailsPage