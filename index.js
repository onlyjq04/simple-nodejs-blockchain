const Chain =  require('./src/chain');

let chain = new Chain();

chain.createGenesisBlock();

setInterval(function() {
    chain.createNextBlock();
    console.log(`Block created: ${chain.getCurrentBlock().getHash()}, index ${chain.currentIndex}`);
}, 10000);