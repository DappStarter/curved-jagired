require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift release machine unfold include clinic army gesture'; 
let testAccounts = [
"0x415d29b14e4fc3729b33c561a91d91441168de0cafdc71bf17f0ffe0dd410e8d",
"0xe37f0db705f53356378e03d3a6ae875daa98fab9d5055f2e8a14e91fae18e8ec",
"0x25094ed22b2cce059b88a5b5df87a3d9f3b30ac0c539d50e5c7e25b9f9393e5c",
"0x90b904ce3f54ad5228891b43bed1faf37f8754ae9169e6e8a47611a2fc502eb4",
"0xcac310904b9d94329bd24ec6e5e54b66dbb92e01f73459a0c5b92806bd16ee77",
"0x6628c2f27fc91d97c9b23cf74d85e89985cc5e6385a310cc8a10763e84b6c1f9",
"0xef8000585e2471ced104bdea984ca566bff771bbd56b592ad7de855f5b3aa693",
"0x4f7b31153ab3bf6bbaca3036d0a9dc5f450080edcc2281b26bd8c346ac98237f",
"0xdddb94a71ec58160271ec78f768a5280685c330c52cfe36f00ef47452f3d972f",
"0x5aed66ae03fdf67ca5a9ebcdb145c7fb012985cda87221f43070ae01db496691"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
