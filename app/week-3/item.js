import Item from "./item-list";

export default function Item({item}){

    let {name, quantity, category} = item

    return(
        <li className="bg-blue-300 
                        text-gray-600
                        border-2 
                        border-cyan-300">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </li>
    )
}