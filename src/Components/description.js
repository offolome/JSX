import React from "react";
import product from "../Data/product";

function Description () {
    return (
        <div>
            <h4><strong>Description</strong></h4>
            <p><h6>{product.description}</h6></p>
        </div>
    )
}

export default Description;