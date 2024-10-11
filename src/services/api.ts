import axios from "axios";

export const getCoins = async (limit: number) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?per_page=${limit}&vs_currency=usd`);
    return response.data;
};

import Moralis from 'moralis';

export const getNFTS = async () => {
    try {
        await Moralis.start({
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIwOWQyNTYxLTMyN2QtNGU3Zi05NmRkLTZjZDMwMjg2OTYzYiIsIm9yZ0lkIjoiNDExMzg4IiwidXNlcklkIjoiNDIyNzY2IiwidHlwZUlkIjoiZWMxYjliMzYtNWU1NS00MjE3LTk1NmEtNGUxMjE1ZGVkZmZhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mjg2NzQyNzIsImV4cCI6NDg4NDQzNDI3Mn0.n8FIJ5_Dr3Xs8oq0oxd9f1RWkVyxbyuXIm1X_sGd_k8"
        });

        const response = await Moralis.EvmApi.nft.getNFTContractMetadata({
            "chain": "0x1",
            "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
        });

        if (response) {
            return response.raw;
        } else {
            throw new Error("Failed to fetch NFT contract metadata");
        }
    } catch (e) {
        console.error(e);
    }
};

export const getCryptoIcon = async (id: string) => {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`, {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY || '79002a9a-1b5c-4ade-afe6-5da43f7d75af',
        },
    });

    console.log(response.data.logo);
    return response.data.logo;
};
