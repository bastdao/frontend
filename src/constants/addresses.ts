import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x108A8B7200d044Bbbe95BEF6F671BAEc5473E05F",
    HIHIDAO_ADDRESS: "0x0c7eBd6f6A0e5267Ca0cb969459360937De4ba44",
    HOHODAO_ADDRESS: "0xF692e42A396E1e6Df4f12733bf1664A35Dc8F019",
    MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    STAKING_ADDRESS: "0x366099DAafB3FF828055cCd54474045755F3fCe0",
    STAKING_HELPER_ADDRESS: "0x5154339ddA1be235e2f86d710FFf9370eF37e70B",
    HOHODAO_BONDING_CALC_ADDRESS: "0xe7C6eeA9B1eB64a5C1d3225b4f74Bd0C19EFb603",
    TREASURY_ADDRESS: "0x1e290388e0F77CFFDc5e852A9c19fB2b4fd729Cf",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WHIHIDAO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network don't support");
};