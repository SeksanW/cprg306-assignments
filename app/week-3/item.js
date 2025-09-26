export default function Item({ item }) {

    let { name, quantity, category } = item;
    return (
        <li className="bg-gray-100  
                    border border-gray-300 
                    rounded-md
                    p-4
                    w-full
                    max-w-2xl
                    shadow-sm">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">Buy {quantity} in {category}</p>
    </li>
    );

}