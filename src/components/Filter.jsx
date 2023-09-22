import { useState } from 'preact/hooks';
import { barsPintedSorted } from '../utils/fetcher.ts';
import { sorter, citySorter } from '../utils/sorters.js';
import Toplist from "./Toplist.jsx";


export default function Filter() {
    const cities = ["Oslo", "Seljord", "Bø"];
    const [location, setLocation] = useState("Oslo");
    const barsFiltered = citySorter(barsPintedSorted, location);
    const [sort, setSort] = useState(true)
    const barsAlpha = sorter(barsFiltered);

    return (
        <>
            <div>
                <h2 className="font-semibold">Velg sted:</h2>
                <nav className='flex gap-2 font-extrabold my-2'>
                    {cities.map((city) => (
                        <button className="hover:bg-violet-300 bg-amber-200 rounded-md p-1 cursor-pointer" onClick={() => setLocation(city)}>{city}</button>
                    ))}
                </nav>
                <button onClick={() => setSort(!sort)} className="hover:bg-violet-300 bg-amber-200 rounded-md p-1 cursor-pointer font-extrabold">
                    {sort ? "Sorter alfabetisk" : "Sorter etter pris"}
                </button>
                <h1 className="text-2xl font-semibold my-2">Ølpriser — {location}</h1>
            </div>
            {sort ? <Toplist bars={barsFiltered} /> : <Toplist bars={barsAlpha} />}
        </>
    )
}
