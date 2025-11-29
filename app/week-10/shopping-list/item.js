export default function Item({ item, onSelect }) {
    const { name, quantity, category } = item;
    return (
    <li
        onClick={() => onSelect && onSelect(item)}
        className=" border p-2 hover:shadow-md hover:bg-gray-100  cursor-pointer w-full">
            <h3 className="text-lg font-bold mb-1">
                {name}
            </h3>
            <p>Buy {quantity} in {category}</p>   
    </li>
    );

}