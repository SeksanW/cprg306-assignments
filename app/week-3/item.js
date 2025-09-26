export default function Item({ item }) {

    let { name, quantity, category } = item;
    return (
        <li className="bg-blue-300 
                        text-white-600
                        w-2xl">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </li>
    );

}