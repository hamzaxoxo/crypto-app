export interface CryptoData {
    ath: string;
    ath_change_percentage: string;
    ath_date: string;
    atl: string;
    atl_change_percentage: string;
    atl_date: string;
    circulating_supply: string;
    current_price: string;
    fully_diluted_valuation: string;
    high_24h: string;
    id: string;
    image: string;
    last_updated: string;
    low_24h: string;
    market_cap: string;
    market_cap_change_24h: string;
    market_cap_change_percentage_24h: string;
    market_cap_rank: string;
    max_supply: string;
    name: string;
    price_change_24h: string;
    price_change_percentage_24h: string;
    roi: null | string;
    symbol: string;
    total_supply: string;
    total_volume: string;
}
export interface LoginState {
    email: string;
    password: string;
}

export interface CryptoState {
    cryptos: any[];
    loading: boolean;
    error?: string;
}