import { useState } from "react";

export default function NewItem({ onAddItem }) {
const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("produce");

const increment = () => {
    if (quantity < 99) setQuantity(quantity + 1);
};

const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    alert(`Added item:\nName: ${item.name}\nQuantity ${item.quantity}\nCategory ${item.category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
    onAddItem(item);
};

const baseButton =
    "w-8 h-5 flex items-center justify-center rounded text-white text-xl font-bold transition-colors duration-200";
const incrementStyles =
    (quantity >= 99 ? "bg-gray-500 cursor-not-allowed " : "bg-blue-400 hover:bg-blue-500 ") + baseButton;
const decrementStyles =
    (quantity <= 1 ? "bg-gray-500 cursor-not-allowed " : "bg-blue-400 hover:bg-blue-500 ") + baseButton;

return (
    <form
    onSubmit={handleSubmit}
    className="w-full mx-auto p-2 space-y-4 shadow-md">

    <div>
        <input
            type="text"
            placeholder="Item Name"
            className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)} required
        />
    </div>
    <div className="flex gap-3 items-center flex-wrap">

<div className="flex items-center w-35 gap-3 border p-2 rounded">
    <p className="w-15">{quantity}</p>

    <button
        type="button"
        onClick={decrement}
        disabled={quantity <= 1}
        className={decrementStyles}
    >
    −
    </button>

    <button
        type="button"
        onClick={increment}
        disabled={quantity >= 99}
        className={incrementStyles}
    >
    +
    </button>
</div>

    <div className=" p-2 rounded">
        <select
            className="w-full p-2 rounded border ml-auto"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="seafood">Seafood</option>
            <option value="canned goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="dry goods">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
    </div>

    </div>
        <button
            type="submit"
            className="w-80 p-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 rounded transition"
            >+
        </button>
    </form>
);
}