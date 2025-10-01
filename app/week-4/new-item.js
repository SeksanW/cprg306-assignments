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
    <main className="flex items-center justify-center h-screen">
        <div className="bg-blue-100 w-80 h-24 rounded-2xl flex items-center justify-between px-6 shadow">
        <div className="w-16 h-12 flex items-center justify-center border-2 border-gray-400 rounded bg-white text-lg font-bold text-gray-800">
        {quantity}

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
