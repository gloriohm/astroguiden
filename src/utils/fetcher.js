import { client } from "../lib/pocketbase.js";

const bars = await client.collection("Bars").getFullList()

const barsPinted = bars.map(bar => ({ ...bar, pint: Math.floor(bar.price / bar.size / 2) }))
const barsPintedSorted = [...barsPinted].sort((a, b) => a.pint - b.pint)

return barsPintedSorted
