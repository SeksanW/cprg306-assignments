"use client";

export default function Item({ item }) {
    const { name, quantity, category } = item;
    
    return (
        <li 
            onClick={() => {
        if (onSelect) onSelect(item);}}
        className="bg-white w-80 sm:w-96 p-3 rounded-lg shadow hover:shadow-lg hover:bg-blue-50 transition cursor-pointer"
        >
        <h3 className="text-xl font-semibold text-blue-600 capitalize">{name}</h3> 
        <p className="text-gray-700 mt-1">
        Buy {quantity} in {category}
        </p>
    </li>
    );

}