"use client"

import { useState } from "react"


export default function NewItem() {

    // Setting Quantity
    let [quantity, setQuantity] = useState(1);
    let currentQuantity = quantity.valueOf();

    // Button Functions
    const Increment = () => {
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1)
        };
    }

    const Decrement = () => {
        if (currentQuantity > 1) {
            setQuantity(currentQuantity - 1)
        };
    }

    // Button Styling
    let incrementStyles = "bg-blue-500 hover:bg-blue-300 text-white px-5 py-1 m-2 rounded";
    if (currentQuantity >= 20) {
        incrementStyles = "bg-gray-500 text-white px-5 py-1 m-2 rounded"
    }

    let decrementStyles = "bg-blue-500 hover:bg-blue-300 text-white px-5 py-1 m-2 rounded";
    if (currentQuantity <= 1) {
        decrementStyles = "bg-gray-500 text-white px-5 py-1 m-2 rounded"
    }

    // Page Display
    return(
        <main>
            <div className="bg-blue-100 w-40 h-20 rounded-2xl pl-4 m-4">
                <p className="text-gray-700 mx-6">Quantity: {currentQuantity}</p>
                <button onClick={Decrement}
                        className={decrementStyles}>-</button>
                <button onClick={Increment}
                        className={incrementStyles}>+</button>
            </div>
        </main>
    )
}