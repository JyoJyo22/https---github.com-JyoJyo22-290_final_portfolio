import React, { useState } from "react";
import { BsArrowUpSquare, BsArrowDownSquare } from 'react-icons/bs';


function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increase = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const decrease = () => setQuantity(quantity === 0 ? quantity : quantity - 1);

    return (
        <div>
            <BsArrowDownSquare onClick={decrease} /> 
            <span className="quantity-number">{quantity}</span>
            <BsArrowUpSquare onClick={increase} />
        </div>
    );
}

export default ProductQuantity;
