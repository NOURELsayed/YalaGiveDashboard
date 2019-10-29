import Web3 from 'web3';
import contract from '@truffle/contract';
import YallaGiveAdminsArtifact from '../build/YallaGiveAdmins.json';

window.Web3 = Web3;
let { web3 } = window;
let { ethereum } = window;
let account;
let accounts = [];
let Service = {
  web3Provider: null,
  token: {},
  init: async () => {
    return Service.initWeb3();
  },

  initWeb3: async () => {
     // Modern dapp browsers...
     if (window.ethereum) {
      Service.web3Provider = window.ethereum;
      web3 = new Web3(ethereum);
      try {
          // Request account access if needed
          ethereum.enable();
          // Acccounts now exposed
          console.log("ethereum worked")
      } catch (error) {
          // User denied account access...
          console.log("there is an error here");
      }
  }
  // Legacy dapp browsers...
  else if (typeof web3 !== 'undefined') {
    Service.web3Provider = web3.currentProvider;
    web3 = new Web3(web3.currentProvider);
    console.log("old metamask provider");
  }
  // Non-dapp browsers...
  else {
    // set the provider you want from Web3.providers
    Service.web3Provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/510fc52ffdba46848d09cd7a98513790');
    web3 = new Web3(Service.web3Provider);
    console.log("HTTP provider");
  }
    return await Service.initContract();
  },

  initContract: async () => {
    // Get the necessary contract artifact file and instantiate it with truffle-contract.
    Service.token = contract(YallaGiveAdminsArtifact, "0xA46FeAc5C588f7F4E08aA97b76904377b99958a2");

    // Set the provider for our contract.
    Service.token.setProvider(Service.web3Provider.currentProvider);
    return await Service.getCurrentAccount();
  },
  getCurrentAccount: async () => {
    accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      alert(
        `Couldn't get any accounts! Make sure your Ethereum client is configured correctly.`
      );
      return;
    }
    console.log(accounts, 'accounts');

    account = accounts[0];
    return account;
  },

   /** getter functions */

  /**
  * @dev checks if this account is a YallaGive Admin.
  * @param _account 'string' The address to check.
  * @return A bool if Admin or not.
  */
   isYgAdmin: async _account => {
    const instance = await Service.token.deployed();
    const data = await instance.isYgAdmin.call(_account);
    return data;
  },

   /** setter functions */

  /**
  * @dev sets an account as a YallaGive Admin.
  * @param _account 'string' The address to add.
  * @return 'bool' true if function succeeded.
  */
   addYgAdmin: async (_account) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.addYgAdmin(_account, {
          from: account,
          gas: 200000
        });
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        console.log(e);
      });
    return result;
  },

  /**
  * @dev renouncing adminstrator role.
  * @return 'bool' true if function succeeded.
  */
  renounceYgAdmin: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.renounceYgAdmin({
          from: account,
          gas: 200000
        });
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        console.log(e);
      });
    return result;
  }
};

module.exports = { Service };