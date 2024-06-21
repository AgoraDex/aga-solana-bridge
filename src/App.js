import WormholeConnect from "@wormhole-foundation/wormhole-connect";

const config = {
  networks: ["ethereum", "solana"],
  rpcs: {
    solana:
      "https://swissborg.rpcpool.com/b96234be-2d36-4600-b0d9-2f222666ac9e",
    ethereum: "https://rpc.ankr.com/eth",
  },
  tokens: ["AGAeth", "AGAsolana"],
  tokensConfig: {
    AGAeth: {
      key: "AGAeth",
      symbol: "AGA",
      nativeChain: "ethereum",
      tokenId: {
        chain: "ethereum",
        address: "0x87B46212e805A3998B7e8077E9019c90759Ea88C",
      },
      icon: "https://bafybeihmwgeivvfilskpd43mdo53e5u4cwntwdky463eeabwze7m6speum.ipfs.dweb.link/",
      coinGeckoId: "",
      color: "#FFFFFF",
      decimals: {
        default: 18,
      },
      foreignAssets: {
        solana: {
          address: "AGAxefyrPTi63FGL2ukJUTBtLJStDpiXMdtLRWvzambv",
          decimals: 9,
        },
      },
    },
    AGAsolana: {
      key: "AGAsolana",
      symbol: "AGA",
      nativeChain: "solana",
      tokenId: {
        chain: "solana",
        address: "AGAxefyrPTi63FGL2ukJUTBtLJStDpiXMdtLRWvzambv",
      },
      icon: "https://bafybeihmwgeivvfilskpd43mdo53e5u4cwntwdky463eeabwze7m6speum.ipfs.dweb.link/",
      coinGeckoId: "",
      color: "#FFFFF",
      decimals: {
        default: 9,
      },
    },
  },
  nttGroups: {
    SOLANA_AGA: {
      nttManagers: [
        {
          chainName: "ethereum",
          address: "0xCD024C7eB854f6799A343828773cB3A8107d17d4",
          tokenKey: "AGAeth",
          transceivers: [
            {
              address: "0x6eB0d287A539AAB2eB962De550Fe5dDA29b0fe52",
              type: "wormhole",
            },
          ],
        },
        {
          chainName: "solana",
          address: "NttADdCvGLUhukNyePei9CkmHoe6S9xjqgqfQv51PQg",
          tokenKey: "AGAsolana",
          transceivers: [
            {
              address: "NttADdCvGLUhukNyePei9CkmHoe6S9xjqgqfQv51PQg",
              type: "wormhole",
            },
          ],
        },
      ],
    },
  },
};

const theme = {
  background: {
    default: "#00000",
  },
  font: {
    primary: '"Anton", sans-serif',
    header: '"Inter", monospace',
  },
  text: {
    primary: "#ECE8E1",
    secondary: "#ece8e1b3",
  },
  button: {
    primary: "#0092CD",
  },
  modal: {
    background: "#000000",
  },
};

function App() {
  return <WormholeConnect config={config} theme={theme} />;
}

export default App;
