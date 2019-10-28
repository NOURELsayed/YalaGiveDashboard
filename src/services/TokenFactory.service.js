import Web3 from 'web3';
import contract from '@truffle/contract';
import tokenFactoryArtifact from '../build/TokenFactory.json';

window.Web3 = Web3;
let { web3 } = window;
let { ethereum } = window;
let account;
let accounts = [];
let Service = {
  web3Provider: null,
  token: {},
  init: function() {
    return Service.initWeb3();
  },

  initWeb3: function() {
    // Modern dapp browsers...
    if (window.ethereum) {
      Service.web3Provider = window.ethereum;
      web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        ethereum.enable();
        // Acccounts now exposed
        console.log('ethereum worked');
      } catch (error) {
        // User denied account access...
        console.log('there is an error here');
      }
    }
    // Legacy dapp browsers...
    else if (typeof web3 !== 'undefined') {
      Service.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
      console.log('old metamask provider');
    }
    // Non-dapp browsers...
    else {
      // set the provider you want from Web3.providers
      Service.web3Provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/510fc52ffdba46848d09cd7a98513790'
      );
      web3 = new Web3(Service.web3Provider);
      console.log('HTTP provider');
    }
    return Service.initContract();
  },

  initContract: function() {
    // Get the necessary contract artifact file and instantiate it with truffle-contract.
    Service.token = contract(tokenFactoryArtifact);

    // Set the provider for our contract.
    Service.token.setProvider(Service.web3Provider);
    return Service.getCurrentAccount();
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
   * @return 'Array' of all the addresses of NewToken contracts that have been created.
   */
  getAllTokenContracts: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.getAllTokenContracts.call();
    return data;
  },

  /**
   * @return address of ataa token contract.
   */
  getAtaaContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.attaToken.call();
    return data;
  },

  /**
   * @return address of yallagiveAdmin contract.
   */
  getYgAdminContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.yallaAdmin.call();
    return data;
  },
  /**
   * @return address of registration contract.
   */
  getRegistrationContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.registration.call();
    return data;
  },

  /**
   * @dev Returns the address of the current owner.
   */
  getOwner: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.owner.call();
    return data;
  },

  /** setter functions */

  /**
   * @dev Function to create a new token contract.
   * @param name of the new token to be created.
   * @param symbol of the new token to be created.
   * @param decimals of the new token to be created, can be divided to how many units.
   * @param toPayAtaa The amount of Ataa tokens that will be taken from the client to be converted to the new token.
   * @param price of the new token. for example: if price = 5 then 1 Ataa token = 5 newTokens.
   */
  createNewToken: async (name, symbol, decimals, toPayAtaa, price) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.createNewToken(
          name,
          symbol,
          decimals,
          toPayAtaa,
          price,
          {
            from: account,
            gas: 2000000
          }
        );
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        console.log(e);
      });
    return result;
  },

  // exchangeToken: async (tokenToBuy, tokenToSell, amount, sender) => {
  //   const result = await Service.token
  //     .deployed()
  //     .then(instance => {
  //       return instance.exchangeToken(tokenToBuy, tokenToSell, amount, sender, {
  //         from: account,
  //         gas: 200000
  //       });
  //     })
  //     .then(res => {
  //       return res;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  //   return result;
  // },

  sendTokenToFactory: async (tokenToSell, amount) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.sendTokenToFactory(tokenToSell, amount, {
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

export default { Service };
