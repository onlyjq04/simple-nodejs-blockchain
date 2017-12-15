const crypto = require('crypto');

/**
 * A block is just like a node from a linked list. The pointer the previous block is hashed by sha256 algorithm.
 */
class Block {
    constructor(idx, timestamp, data, previousHash) {
        this.idx = idx;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this._hash = this.hashBLock();
    }

    getHash() {
        return this._hash;
    }

    hashBLock() {
        const hash = crypto.createHash('sha256');
        hash.update(this.idx + this.timestamp + this.data + this.previousHash);
        return hash.digest('hex');
    }
}

module.exports = Block;