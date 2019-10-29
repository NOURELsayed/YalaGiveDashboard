import Web3 from 'web3';
import contract from '@truffle/contract';
import registrationArtifact from '../build/Registration.json';

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
    Service.token = contract(registrationArtifact, "0x95a833Ea4C552e2e4Da449e81d17688923902625");

    // Set the provider for our contract.
    Service.token.setProvider(Service.web3Provider);
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
  * @return address of ataa token contract.
  */
  getAtaaContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.attaToken.call();
    return data;
  },

   /**
    * @return address of factory token contract.
   */
  getFactoryContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.factory.call();
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

  getCharityOrgAuthority: async charityOrg => {
    const instance = await Service.token.deployed();
    const data = await instance.chrtyOrgs.call(charityOrg);
    return data;
  },

    /**
  * @dev Gets the wallet address of a specefic user.
  * @param userEthAddress 'string' The address of requested user.
  * @return wallet address of the specefied user.
  */
  GetUserAccount: async userEthAddress => {
    const instance = await Service.token.deployed();
    const data = await instance.users.call(userEthAddress);
    return data;
  },

/**
  * @dev check authorization of a charity organization.
  * @param charityOrg 'string' The address of requested org.
  * @return bool.
  */
  isOrg: async charityOrg => {
    const instance = await Service.token.deployed();
    const data = await instance.isOrg.call(charityOrg);
    return data;
  },

  /** setter functions */

  approveChrtyOrg: async charityOrg => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.approveChrtyOrg(charityOrg, {
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

  rejectChrtyOrg: async charityOrg => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.rejectChrtyOrg(charityOrg, {
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
   * @dev Give authority to an account to mint new tokens, only a minter can call this function.
   * @param _account 'string' The address to give authority.
   */
  createNewAccount: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.createNewAccount({
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

  setTokenFactoryContract: async factoryAddress => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.renounceMinter(factoryAddress,{
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

export default { Service } ;
