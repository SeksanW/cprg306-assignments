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
    "w-10 h-10 flex items-center justify-center rounded text-white text-xl font-bold transition-colors duration-200";

const incrementStyles =
    quantity >= 20
        ? "bg-gray-500 cursor-not-allowed " + baseButton
        : "bg-blue-500 hover:bg-blue-400 " + baseButton;

    const decrementStyles =
    quantity <= 1
        ? "bg-gray-500 cursor-not-allowed " + baseButton
        : "bg-blue-500 hover:bg-blue-400 " + baseButton;

return (
    <main className="flex justify-center">
        
        <div className="bg-blue-100 w-50 h-15 p-2 flex flex-col items-center justify-center shadow">
        <div className="flex items-center justify-between w-full px-6">
        <div className="w-16 h-10 flex items-center justify-center border-2 border-gray-400 rounded bg-white text-lg font-bold text-gray-800 ">
            {quantity}
        </div>
        <div className="flex space-x-2 ml-4">
            <button
                onClick={decrement}
                disabled={quantity <= 1}
                className={decrementStyles}
                > - </button>
            <button
                onClick={increment}
                disabled={quantity >= 20}
                className={incrementStyles}
                > + </button>
        </div>
        </div>
        </div>
    </main>
);
}