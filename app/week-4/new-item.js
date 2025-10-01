"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
    if (quantity < 20) {
        setQuantity(quantity + 1);
    }
    };

    const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
    };

    const baseButton =
    "px-5 py-1 m-2 rounded text-white transition-colors duration-200";

    const incrementStyles =
    quantity >= 20
        ? "bg-gray-500 cursor-not-allowed " + baseButton
        : "bg-blue-500 hover:bg-blue-300 " + baseButton;

    const decrementStyles =
    quantity <= 1
        ? "bg-gray-500 cursor-not-allowed " + baseButton
        : "bg-blue-500 hover:bg-blue-300 " + baseButton;

    return (
    <main>
        <div className="bg-blue-100 w-48 h-24 rounded-2xl flex flex-col justify-center items-center m-4 shadow">
            <p className="text-gray-700 text-lg mb-2">Quantity: {quantity}</p>
        <div>

            <button
            onClick={decrement}
            disabled={quantity <= 1}
            className={decrementStyles}
            >
            - 
            </button>

            <button
            onClick={increment}
            disabled={quantity >= 20}
            className={incrementStyles}
            >
            +
            </button>
        
        </div>
        </div>
    </main>
    );
}
