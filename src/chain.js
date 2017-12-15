const Block = require('./block');
const moment = require('moment');

class Chain {
    constructor() {
        this.genesisBlock = null;
        this.currentIndex = 0;
        this._chain = [];
    }

    _incr_index() {
        this.currentIndex++;
    }

    createGenesisBlock() {
        if (!this.genesisBlock) {
            this.genesisBlock = new Block(0, moment().unix(), '', '0');
            this._chain.push(this.genesisBlock);
        }
    }

    createNextBlock(data) {
        const params = [
            this.currentIndex + 1,
            moment().unix(),
            data,
            this.getCurrentBlock().getHash()
        ];

        this._chain.push(new Block(...params));
        this._incr_index();
    }

    getCurrentBlock() {
        return this._chain[this.currentIndex];
    }
}

module.exports = Chain;