import Web3 from "web3";

let web3;

export const state = () => ({
  server: {
    blockchain: "http://localhost:7545"
  },
  valid: {
    blockchain: false
  }
});

export const mutations = {
  setServer(state, server) {
    state.server = server;
  },

  setBlockchainValid(state, valid) {
    state.valid.blockchain = valid;
  }
};

export const actions = {
  async setServer({ commit, dispatch }, server) {
    commit("setServer", server);

    await Promise.all([dispatch("checkBlockchainServer")]);
  },

  async checkBlockchainServer({ commit, state }) {
    let valid;

    try {
      web3 = new Web3(state.server.blockchain);
      valid = await web3.eth.net.isListening();
    } catch (err) {
      valid = false;
    }

    commit("setBlockchainValid", valid);
  }
};

export const getters = {
  server(state) {
    return state.server;
  },

  valid(state) {
    return state.valid;
  }
};
