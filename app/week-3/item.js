export default function Item({ item }) {

    let { name, quantity, category } = item;
    return (
        <li className="bg-white/100
                    border border-white 
                    p-4
                    w-full
                    max-w-md
                    shadow-sm">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">Buy {quantity} in {category}</p>
    </li>
    );

}