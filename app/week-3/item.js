export default function Item({ item }) {

    let { name, quantity, category } = item;
    return (
        <li className="bg-blue-300 
                        text-gray-600
                        border-2 
                        border-cyan-300
                        w-2xl
                        m-5 
                        p-5 
                        rounded">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </li>
    );

}