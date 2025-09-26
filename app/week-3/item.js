export default function Item({ item }) {

    let { name, quantity, category } = item;
    return (
        <li className="bg-slate-900
                    border-2

                    w-2xl
                    m-5
                    p-5
                    ">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-gray-600 mt-1">Buy {quantity} in {category}</p>
    </li>
    );

}