    const path = require('path'); 
    const fs = require('fs');
    const solc = require('solc');

    // const greetingsPath = path.resolve(__dirname,'contracts','Greetings.sol');
    const eBayClonePath = path.resolve(__dirname, 'contracts', 'EBayClone.sol')

    // const source = fs.readFileSync(greetingsPath, 'utf8');
    const source = fs.readFileSync(eBayClonePath, 'utf8');
    
    // module.exports = solc.compile(source, 1).contracts[':Greetings'];
    module.exports = solc.compile(source, 1).contracts[':EBayClone'];