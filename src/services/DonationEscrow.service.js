import Web3 from 'web3';
import contract from '@truffle/contract';
import donationEscrowArtifact from '../build/DonationEscrow.json';

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
    Service.token = contract(donationEscrowArtifact);

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
  * @return address of used token contract.
  */
  getTokenContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.token.call();
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
  * @return address of the charity owner.
  */
  getCharityOwner: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.charityOwner.call();
    return data;
  },
 
 getDonatedValue: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.donatedValue.call();
    return data;
  },

  /**
  * @return address of the donator.
  */
 getDonator: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.donator.call();
    return data;
  },

  /**
  * @return string.
  */
 getProofOfPayment: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.proofOfPayment.call();
    return data;
  },

 getReleaseTime: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.releaseTime.call();
    return data;
  },

  getStartTime: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.startTime.call();
    return data;
  },

  getState: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.state.call();
    return data;
  },

  /** setter functions */

  validateDonation: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.validateDonation({
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

  rejectDonation: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.rejectDonation({
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
  
  adminValidation: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.adminValidation({
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
  
  adminRejection: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.adminRejection({
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
  
  releaseTokens: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.releaseTokens({
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
