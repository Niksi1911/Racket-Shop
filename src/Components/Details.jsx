import React from "react";


class Details extends React.Component {


    render() {
        const racket = this.props.racket;

        if (!racket) {
            <p>No racket info</p>
        }
        
        return (
            <div>
                <h1>{racket.name}</h1>

                <p>ID: {racket.id}</p>
                <p>Sport: {racket.sport}</p>
                <p>Brand: {racket.brand}</p>
                <p>Price: {racket.price} €</p>
                <button>ADD TO CART</button>
            </div>

            
        );

    }
}

export default Details