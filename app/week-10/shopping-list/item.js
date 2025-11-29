export default function Item({ item, onSelect }) {
    const { name, quantity, category } = item;
    return (
    <li
        onClick={() => onSelect && onSelect(item)}
        className="

    border
    p-3
    cursor-pointer
    transition-all
    hover:bg-orange-500
    hover:shadow-md">
            <h3 className="text-lg font-bold mb-1">
                {name}
            </h3>
            <p>Buy {quantity} in {category}</p>   
    </li>
    );

}