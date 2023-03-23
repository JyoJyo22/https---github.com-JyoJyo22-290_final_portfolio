import React from "react";
import ProductQuantity from "./ProductQuantity";


function ProductRow( {product} ) {
    return (
        <tr>
            <td>{product.company}</td>
            <td className="td-product-name">{product.product}</td>
            <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow;