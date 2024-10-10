
export interface LoginState {
    email: string;
    password: string;
}

export interface CryptoState {
    cryptos: any[];
    loading: boolean;
    error?: string;
}

export interface ButtonProps {
    onPress?: () => void;
    title: string | React.ReactElement;
    style?: any;
    textStyle?: any;
    disabled?: boolean;
    loading?: boolean;
}

export interface CryptoItems {
    id: number;
    name: string;
    imageURL?: string;
    percent24hr: string;
    currentPrice?: string;
    pnl?: string;
    symbol?: string;
}

export interface TotalBalanceCardProps {
    balance: string;
    pnlBalance: string;
    image?: boolean;
}

export type RootStackParamList = {
    Intro: undefined;
    SignUp: undefined;
    SignIn: undefined;
    Home: undefined;
    Detailed: { name: string, symbol: string };
};

interface Quote {
    price?: number;
    volume_24h?: number;
    volume_change_24h?: number | null;
    percent_change_1h?: number | null;
    percent_change_24h?: number | null;
    percent_change_7d?: number | null;
    market_cap?: number;
    market_cap_dominance?: number;
    fully_diluted_market_cap?: number;
    last_updated?: string;
}

export interface CryptoData {
    id?: string;
    name: string;
    symbol?: string;
    slug?: string;
    cmc_rank?: number;
    num_market_pairs?: number;
    circulating_supply?: string;
    total_supply?: string;
    max_supply?: string;
    infinite_supply?: boolean | null;
    last_updated?: string;
    date_added?: string;
    tags?: string[];
    platform?: any | null;
    self_reported_circulating_supply?: number | null;
    self_reported_market_cap?: number | null;
    quote?: {
        USD: Quote;
        BTC: Quote;
    };
}


export interface CryptoDataForHome {
    name: string;
    // quote?: Quote;
}