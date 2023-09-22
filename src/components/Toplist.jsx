import DropdownCard from "./DropdownCard.jsx";

export default function Toplist({ bars }) {
    return (
        <ul class="pt-4">
            {
                bars.map(({ bar, price, size, updated, pint }) => (
                    <li class="font-semibold mb-2 border-b-2 border-violet-300">
                        <details>
                            <summary class="flex justify-between cursor-pointer">
                                <span>{bar}</span>
                                {price === pint ? (
                                    <span>{price},-</span>
                                ) : (
                                    <span>*{pint},-</span>
                                )}
                            </summary>
                            <DropdownCard price={price} size={size} updated={updated} />
                        </details>
                    </li>
                ))
            }
        </ul>
    )
}