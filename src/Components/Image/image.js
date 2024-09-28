import React from "react";
import product from "../../Data/Product/product";

function Image () {
    return <img src={product.imageUrl} alt="produit" />
}

export default Image;