"use client"

import { useState } from "react"

export default function NewItem() {
const [quantity, setQuantity] = useState(1);
const [name, setName] = useState("");
const [category, setCategory] = useState("produce");

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

const handleNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
}

const handleCategoryChange = (event) => {
    console.log(event.target.value)
    setCategory(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
        name: name,
        quantity: quantity,
        category: category
    };

    console.dir(item);

    alert(`
        Added item
        Name: ${item.name}
        Quantity: ${item.quantity}
        Category: ${item.category}
        `)

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

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

    return(
            <form onSubmit={handleSubmit} className="w-90 mx-auto mt-5 bg-white text-white p-6 rounded-3xl shadow-lg space-y-5">
                    <div className="my-2">
                        <input type="text"
                            placeholder="Item name" 
                            className="w-full p-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={true}/>
                    </div>

            <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">



            <div className="w-16 h-10 flex items-center justify-center border-2 border-gray-400 rounded bg-white text-lg font-bold text-gray-800 ">
            {quantity}
            </div>

                
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

                    
                        <label className="inline-block w-20"></label>
                        <select
                        className="w-40 p-2 rounded-lg border border-gray-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>                      
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                        </select>
                    
                </div>


                <button 
                type="submit"
                className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-400 active:bg-blue-600 transition"
                >Add Item</button>
            </form>
    )
}