import Web3 from "web3";

let web3;

export const state = () => ({
  status: {},
  blocks: [],
  transactions: [],
  accounts: []
});

export const mutations = {
  setStatus(state, status) {
    state.status = status;
  },

  setBlocks(state, blocks) {
    state.blocks = blocks;
  },

  setTransactions(state, transactions) {
    state.transactions = transactions;
  },

  setAccounts(state, accounts) {
    state.accounts = accounts;
  }
};

export const actions = {
  async fetchStatus({ commit, dispatch, rootGetters }) {
    const server = rootGetters["setting/server"];
    const url = server.blockchain;

    web3 = new Web3(url);

    let isListening;

    try {
      isListening = await web3.eth.net.isListening();
    } catch (e) {
      isListening = false;
    }

    if (!isListening) {
      const provider = web3.currentProvider;

      commit("setStatus", {
        isListening,
        provider,
        networkId: "",
        peerCount: "",
        gasPrice: "",
        gasLimit: ""
      });
      commit("setBlocks", []);
      commit("setTransactions", []);
      commit("setAccounts", []);
    } else {
      const provider = web3.currentProvider;
      const [networkId, peerCount, gasPrice] = await Promise.all([
        web3.eth.net.getId(),
        web3.eth.net.getPeerCount(),
        web3.eth.getGasPrice()
      ]);

      const block = await web3.eth.getBlock(0);
      const gasLimit = block.gasLimit;

      const status = {
        isListening,
        provider,
        networkId,
        peerCount,
        gasPrice,
        gasLimit
      };

      commit("setStatus", status);

      await Promise.all([dispatch("fetchBlocks"), dispatch("fetchAccounts")]);
      await dispatch("fetchTransactions");
    }
  },

  async fetchBlocks({ commit }) {
    const blockNum = await web3.eth.getBlockNumber();
    const promisedBlocks = [];

    for (let i = 0; i < blockNum + 1; i++) {
      promisedBlocks.unshift(web3.eth.getBlock(i));
    }

    const blocks = await Promise.all(promisedBlocks);

    blocks.forEach(b => {
      const d = new Date(b.timestamp * 1000);
      const year = d.getFullYear();
      const month = d.getMonth();
      const date = d.getDate();
      const hour = d.getHours();
      const minute = d.getMinutes();
      const second = d.getSeconds();

      b.timestamp = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    });

    commit("setBlocks", blocks);
  },

  // * Call after calling setBlocks()
  async fetchTransactions({ commit, getters }) {
    const promisedTransactions = [];

    getters.blocks.forEach(b => {
      b.transactions.forEach(tx => {
        promisedTransactions.push(web3.eth.getTransaction(tx));
      });
    });

    const transactions = await Promise.all(promisedTransactions);

    transactions.forEach(tx => {
      tx.value = web3.utils.fromWei(tx.value, "ether");
      if (!tx.to) tx.to = "null";
    });

    commit("setTransactions", transactions);
  },

  async fetchAccounts({ commit, state }) {
    const addresses = await web3.eth.getAccounts();
    const accounts = [];

    for (let i = 0; i < addresses.length; i++) {
      const address = addresses[i];
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address),
        "ether"
      );
      const txCount = await web3.eth.getTransactionCount(address);

      accounts.push({ address, balance, txCount });
    }

    commit("setAccounts", accounts);
  }
};

export const getters = {
  isListening(state) {
    return state.status.isListening;
  },

  status(state) {
    return state.status;
  },

  blocks(state) {
    return state.blocks;
  },

  blockCount(state) {
    return state.blocks.length;
  },

  transactions(state) {
    return state.transactions;
  },

  transactionCount(state) {
    return state.transactions.length;
  },

  accounts(state) {
    return state.accounts;
  },

  accountCount(state) {
    return state.accounts.length;
  }
};
