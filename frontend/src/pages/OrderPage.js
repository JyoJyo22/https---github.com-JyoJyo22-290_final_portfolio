import React from "react"
import ProductRow from "../components/ProductRow"


function OrderPage( {products} ) {

    return (
        <div>
            <h2>Product Selection</h2>    
            <article>
                <p>
                    Take home your favorite Japan-inspired products to motivate your Japanese learning! You can select
                    up to 10 of each item.
                </p>
                <fieldset className="order-fieldset">
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th className="product-header">Company</th>
                                <th className="product-header">Product</th>
                                <th className="product-header">Price</th>
                                <th className="product-header">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((currItem, index) => 
                                <ProductRow product={currItem} key={index} />
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </article>
        </div>
    );    
}


export default OrderPage;