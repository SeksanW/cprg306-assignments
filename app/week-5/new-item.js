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
        setCategory("");
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
        <form onSubmit={handleSubmit} className="bg-gray-700 text-white w-80 p-6 rounded-3xl shadow-lg mx-auto mt-10">
                <div className="bg-gray-700 w-90 h-50 p-5 rounded-3xl m-5">
                    <div className="my-2">
                        <label className="inline-block w-15">Name: </label>
                        <input type="text" 
                            className="border border-white rounded"
                            onChange={handleNameChange}
                            value={name}
                            required={true}/>
                    </div>
                    <div className="my-2">
                        <label className="inline-block w-20">Category: </label>
                        <select 
                            className="border Border-white rounded bg-gray-700"
                            onChange={handleCategoryChange}
                            value={category}
                            required={true}>
                            <option disabled value="">Select Category</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
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

                <button 
                type="submit"
                className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-400 active:bg-blue-600 transition"
                >Add Item</button>
                </div>
            </form>
    )
}