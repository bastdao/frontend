import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/TIME-MIM.svg";
import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x45Bf56782479Ef67c0238a56307C37FD0C573d27",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
    },
});

export const wavax = new CustomBond({
    name: "wavax",
    displayName: "wAVAX",
    bondToken: "AVAX",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x5D254112bd3EEBD6c6983841033cb6EC22c54E45",
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
        },
    },
});

export const mimTime = new LPBond({
    name: "mim_time_lp",
    displayName: "HOHODAO-MIM LP",
    bondToken: "MIM",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x6F58de920fAfBD55BD8a16Cd709653d1191c3723",
            reserveAddress: "0x08eB7D7C06eF8AE58840eA039177b156D0A262D3",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xF692e42A396E1e6Df4f12733bf1664A35Dc8F019",
});

export const avaxTime = new CustomLPBond({
    name: "avax_time_lp",
    displayName: "HOHODAO-AVAX LP",
    bondToken: "AVAX",
    bondIconSvg: AvaxTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x9a2F91693B6D64c60c61384fd00A928379D92f52",
            reserveAddress: "0x523461ed6f7956602a4ef2cf2fcf4c52dadbc1b5",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/AVAX/0xF692e42A396E1e6Df4f12733bf1664A35Dc8F019",
});

export default [mim, wavax, mimTime];
