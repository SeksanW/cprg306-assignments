export default function Item({ item }) {

    let { name, quantity, category } = item;
    return (
        <li className="bg-slate-900
                    w-150
                    p-2
                    ">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-white mt-1">Buy {quantity} in {category}</p>
    </li>
    );

}