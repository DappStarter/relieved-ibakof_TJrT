require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember clump gesture fork sunset gasp'; 
let testAccounts = [
"0xe30787a060578c80a701ba0cde75c6ef51960d6510f5308ce876ef26f9f59546",
"0xd71b7f70fff52952f5da0c07c6447a93c9151037e34e4e0e237abe9ee2044285",
"0x2681a97696ed7bd2f7273682c7834122a44add826b570126b70cf562529f946c",
"0x24583210f4b56f73d23ae8f42421bc9de46dc28e5c4f062ae28846efafff4855",
"0xf92a5196db33e3f7fe8098ab93f9363c505ce7d8bc53a3cdd17052dd124ec503",
"0xa4e1cb085788846087f01f8f598f81b65aaa0bfe74963d0dadb9c3ac49590b3a",
"0x61656745a761c12e81a38f3893cf405e5b557c049b4908c3427458f24994059a",
"0xfbd60f840de509258299ccf524bdc0657f25f7173370fd95b03cab343b3bb7fd",
"0x6b424393ec46a5d6c32fa17780c120f8903401dadf3106809d3d0ad8c86f14bc",
"0xcf0083253203ca8e3c830b21c87ac8a7a23b2a072dcf2ddb04dc3858fac77f03"
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
            version: '^0.8.0'
        }
    }
};

