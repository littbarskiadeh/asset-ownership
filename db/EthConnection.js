require('dotenv').config();
var Tx = require("ethereumjs-tx").Transaction
const Web3 = require('web3');
const logger = require('../logger');

// const contract = require('truffle-contract');
const artifacts = require('../build/contracts/MarketplaceABI.json');
const contractAddress = '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab'

if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

// const Marketplace = contract(artifacts)
// const Marketplace = new web3.eth.Contract(artifacts.abi, contractAddress)
const Marketplace = new web3.eth.Contract(artifacts, contractAddress)
const account1 = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1' // Your account address 1
// const pk = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d'
const privateKey1 = Buffer.from(
    '4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d',
    'hex',
)
function createAsset(name, symbol, supply) {
    // console.log(`Contract, `, Marketplace.methods)
    return new Promise((resolve, reject) => {

        const data = Marketplace.methods.createAsset(name, symbol, supply).encodeABI();
        // console.log("----My Data----", data)
        web3.eth.getTransactionCount(account1, (err, txCount) => {
            // Build the transaction
            const txObject = {
                nonce: web3.utils.toHex(txCount),
                to: contractAddress,
                from: account1,
                value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                gasLimit: web3.utils.toHex(2100000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
                data: data
            }
            // Sign the transaction
            var Tx = require("ethereumjs-tx").Transaction
            var tx = new Tx(txObject);
            // var tx = new Tx(txObject, { 'chain': 'rinkeby' });
            tx.sign(privateKey1);

            const serializedTx = tx.serialize();
            const raw = '0x' + serializedTx.toString('hex');
            logger.log(`serializedTx,${serializedTx}`);

            // Broadcast the transaction
            web3.eth.sendSignedTransaction(raw)
                .on('receipt', (receipt) => {
                    logger.info(`This is receipt, ${receipt}`);
                    resolve(true)
                }).catch(err => {
                    logger.error(`Error occured wile creating asset, ${err}`);
                    resolve(false);
                })

            // Get emmitted event from blockchain transaction
        })//end getTransactionCount

    })//end promise
}

function getListing() {
    return new Promise((resolve, reject) => {
        Marketplace.methods.getListing().call().then(val => {
            logger.info(`Validation result, ${val}`);

            // console.log(`Validation result `, val);
            resolve(val)
        }).catch(err => {
            logger.error(`Error occured while validating hash, ${err}`);

            // console.error(`Error occured while validating hash`, err);
            resolve(false);
        })
    });
}

module.exports = {
    createAsset,
    getListing
}