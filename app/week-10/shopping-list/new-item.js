import { useState } from "react";

export default function NewItem() {
const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("produce");

const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
};

const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    alert(`Added item:\nName: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
};

const baseButton =
    "w-10 h-10 flex items-center justify-center rounded text-white text-xl font-bold transition-colors duration-200";
const incrementStyles =
    (quantity >= 20 ? "bg-gray-500 cursor-not-allowed " : "bg-blue-500 hover:bg-blue-400 ") + baseButton;
const decrementStyles =
    (quantity <= 1 ? "bg-gray-500 cursor-not-allowed " : "bg-gray-200 hover:bg-gray-300 ") + baseButton;

return (
    <form
    onSubmit={handleSubmit}
    className="w-full mx-auto p-1 space-y-4">

    <div>
        <h1>Item Name</h1>
        <input
            type="text"
            placeholder="eg,. 4L milk"
            className="w-full p-2 rounded border border-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)} required
        />
    </div>

    <div className="flex flex-col gap-2">
        <label className="font-semibold ">Quantity (1–20)</label>
        <p className="text-gray-500">Current: {quantity}</p>

        <div className="flex items-center gap-4">
            <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className={decrementStyles}
                aria-label="Decrease quantity"
                title="Decrease"
            >−
            </button>

            <button
                type="button"
                onClick={increment}
                disabled={quantity >= 20}
                className={incrementStyles}
                aria-label="Increase quantity"
                title="Increase"
            >+
            </button>
        </div>
    </div>

    <div>
        <h1>Category</h1>
        <select
            className="w-full p-2 rounded border bg-gray-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>

            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="seafood">Canned Goods</option>
            <option value="canned goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="dry goods">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
    </div>

    <button
        type="submit"
        className="p-4 bg-green-400 hover:bg-green-700 font-bold py-2 rounded transition"
        >Add Item
    </button>
    
    </form>
);
}