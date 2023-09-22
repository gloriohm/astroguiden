import PocketBase from "pocketbase";

const url = "https://moist-wallet.pockethost.io";
const client = new PocketBase(url);

client.autoCancellation(false);

export default async function fetcher(location) {
    const bars = await client.collection(location).getFullList({});
    return bars;
}