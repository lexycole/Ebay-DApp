const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(  
  // 'your own twelve mnemonic',
  'wagon frown bunker curve card beauty over various behave minimum ozone album', 
  // 'https://rinkeby.infura.io/your own key' 
  'https://rinkeby.infura.io/v3/bc66476cc2264f2e8ba4d88804157861'
     
);


const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts(); 
  
    console.log('attempting to deploy from account', accounts[0]);           
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: '0x' + bytecode})
      .send({from: accounts[0], gas: '5000000'});

    console.log(interface);
    
    console.log('Contract deployed to', result.options.address); 
};
  
deploy();