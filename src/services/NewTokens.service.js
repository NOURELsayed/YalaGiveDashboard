import Web3 from 'web3';
import contract from '@truffle/contract';
import newTokenArtifact from '../build/NewToken.json';

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
    Service.token = contract(newTokenArtifact);

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
      * @return address of ataa token contract.
      */
  getAtaaContractAdd: async () => {
    const instance = await Service.token.deployed();
    const data = await instance._attaToken.call();
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
    * @dev Total number of Ataa tokens in existence
    * @return uint
    */
  getTotalSupply: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.totalSupply.call();
    return data.toNumber();
  },

  /**
  * @return 'uint' the cap for the token minting."Number when reached no more Ataa tokens can be minted"
  */
  getCap: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.cap.call();
    return data.toNumber();
  },

  /**
  * @return 'uint' the number of decimals of the token.
  */
  getdecimals: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.decimals.call();
    return data.toNumber();
  },

  getOwner: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.owner.call();
    return data;
  },

  /**
   * @return 'string' the name of the token.
   */
  getName: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.name.call();
    return data;
  },

  /**
* @dev checks if this account is allowed to mint new tokens.
* @param account 'string' The address to check.
* @return A bool if allowed or not.
*/
  isMinter: async account => {
    const instance = await Service.token.deployed();
    const data = await instance.isMinter.call(account);
    return data;
  },
  // isMintingFinishedasync: async () => {
  //   const instance = await Service.token.deployed();
  //   const data = await instance.mintingFinished.call();
  //   return data;
  // },

  /**
  * @return 'string' the symbol of the token.
  */
  getSymbol: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.symbol.call();
    return data;
  },

  /**
* @dev Gets the balance of the specified address.
* @param owner 'string' The address to query the balance of.
* @return An uint256 representing the amount owned by the passed address.
*/
  getBalanceOf: async owner => {
    const instance = await Service.token.deployed();
    const data = await instance.balanceOf.call(owner);
    return data.toNumber();
  },

  /**
  * @dev Function to check the amount of tokens that an owner allowed to a spender.
  * @param owner 'string' The address which owns the funds.
  * @param spender 'string' The address which will spend the funds.
  * @return A uint256 specifying the amount of tokens still available for the spender.
  */
  getAllowance: async (owner, spender) => {
    const instance = await Service.token.deployed();
    const data = await instance.allowance.call(owner, spender);
    return data.toNumber();
  },

  /**
  * @return 'uint' token's price related to Ataa Token.
  */
  getTokenRate: async () => {
    const instance = await Service.token.deployed();
    const data = await instance.rate.call();
    return data.toNumber();
  },

  /** setter functions */

  /**
   * @dev Function to mint tokens
   * @param to The address that will receive the minted tokens.
   * @param amount The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  mint: async (to, amount) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.mint(to, amount, {
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
  addMinter: async (_account) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.addMinter(_account, {
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
   * @dev A minter can call this function to renounce his right to mint.
   */
  renounceMinter: async () => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.renounceMinter({
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
* @dev Transfer token for a specified address
* @param to 'string' The address to transfer to.
* @param value 'uint' The amount to be transferred.
*/
  transfer: async (to, amount) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.transfer(to, amount, {
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
  * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
  * @param spender 'string' The address which will spend the funds.
  * @param value 'uint' The amount of tokens to be spent.
  */
  approve: async (spender, value) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.approve(spender, value, {
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
   * @dev Transfer tokens from one address to another
   * @param From 'string' The address which you want to send tokens from
   * @param to 'string' The address which you want to transfer to
   * @param value uint256 the amount of tokens to be transferred
   */
  transferFrom: async (From, to, value) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.transferFrom(From, to, value, {
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
 * @dev Increase the amount of tokens that an owner allowed to a spender.
 * approve should be called first. To increment allowed value is better to use this function.
 * @param spender 'string' The address which will spend the funds.
 * @param addedValue 'uint' The amount of tokens to increase the allowance by.
 */
  increaseAllowance: async (spender, addedValue) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.increaseAllowance(spender, addedValue, {
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
  * @dev Decrease the amount of tokens that an owner allowed to a spender.
  * @param spender 'string' The address which will spend the funds.
  * @param subtractedValue 'uint' The amount of tokens to decrease the allowance by.
  */
  decreaseAllowance: async (spender, subtractedValue) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.decreaseAllowance(spender, subtractedValue, {
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
   * @dev Burns a specific amount of tokens.
   * @param amount 'uint' The amount of tokens to be burned.
   */
  burn: async (amount) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.burn(amount, {
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
  * @dev Burns a specific amount of tokens from the target address and decrements allowance
  * @param _account 'string' The address which you want to send tokens from
  * @param _amount 'uint256' The amount of tokens to be burned
  */
  burnFrom: async (_account, _amount) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.burnFrom(_account, _amount, {
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

  buyWithAttaCoin: async (amount) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.buyWithAttaCoin(amount, {
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

  buyOffChain: async (_amount, proofOfPayment) => {
    const result = await Service.token
      .deployed()
      .then(instance => {
        return instance.buyOffChain(_amount, proofOfPayment, {
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
