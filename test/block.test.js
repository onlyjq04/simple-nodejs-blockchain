const assert = require('assert');
const Block = require('../src/block');

describe('Test block structure', function () {
    it('creates the proper hash for a blcok', function (done) {
        let b = new Block(0, 0, 'Creation', null);
        assert(b.hash);
        done();
    });
});