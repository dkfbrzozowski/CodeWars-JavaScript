var spread = require('../Solutions/Unpacking_Arguments.js')

describe('should work', function() {
    var should = require('should');
    it('apply', function() {
        spread(function(x, y) {
            return x + y
        }, [1, 2]).should.equal(3);
    });
});