export default function Item({ item, onSelect }) {
    const { name, quantity, category } = item;
    return (
    <li
        onClick={() => onSelect && onSelect(item)}
        className=" border p-2 rounded hover:shadow-md hover:bg-gray-100  cursor-pointer w-full">
            <h3>
                {name}
            </h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>     
    </li>
    );

}