export default function Item({ item }) {
    const { name, quantity, category } = item;
    return (
    <li className="text-white">
        {name} — Buy {quantity} in {category}
    </li>
);
}
