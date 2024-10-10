import axios from "axios";

export const getCoins = async () => {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY || '79002a9a-1b5c-4ade-afe6-5da43f7d75af',
        },
    });
    return response.data;
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
