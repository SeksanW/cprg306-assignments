export default function Item({ item }) {

    const { name, quantity, category } = item;
    return (
        <li 
        onClick={() => onSelect && onSelect(item)}
        className="bg-slate-900
                    w-96
                    p-2
                    ">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-white mt-1">Buy {quantity} in {category}</p>
    </li>
    );

}