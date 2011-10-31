var assert = require('assert'),    
    gbuf = require('../');

//the uncompressed data we are dealing with
var uncompressedData = 'this is some test data';

//the compressed data as gzip compressed
var gzipped = new Buffer([0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
                          0x03, 0x2b, 0xc9, 0xc8, 0x2c, 0x56, 0x00, 0xa2, 0xe2, 
                          0xfc, 0xdc, 0x54, 0x85, 0x92, 0xd4, 0xe2, 0x12, 0x85, 
                          0x94, 0xc4, 0x92, 0x44, 0x00, 0xbf, 0xa7, 0x84, 0x36, 
                          0x16, 0x00, 0x00, 0x00]);

//the compressed data as deflate compressed                         
var deflated = new Buffer([0x78, 0x9c, 0x2b, 0xc9, 0xc8, 0x2c, 0x56, 0x00, 0xa2, 
                           0xe2, 0xfc, 0xdc, 0x54, 0x85, 0x92, 0xd4, 0xe2, 0x12, 
                           0x85, 0x94, 0xc4, 0x92, 0x44, 0x00, 0x5d, 0xf1, 0x08, 
                           0x23]);

var rawDeflated = new Buffer([0x2b, 0xc9, 0xc8, 0x2c, 0x56, 0x00, 0xa2, 0xe2, 
                              0xfc, 0xdc, 0x54, 0x85, 0x92, 0xd4, 0xe2, 0x12, 
                              0x85, 0x94, 0xc4, 0x92, 0x44, 0x00]);
                              
exports.deflate = function(test){
  gbuf.deflate(uncompressedData, function(data){
    test.equal(data.inspect(), deflated.inspect());
    test.done();
  }); 
};

exports.inflate = function(test){
  gbuf.inflate(deflated, function(data){
    test.equal(data, uncompressedData);
    test.done();
  });
};

exports.deflateRaw = function(test){
  gbuf.deflateRaw(uncompressedData, function(data){
    test.equal(data.inspect(), rawDeflated.inspect());
    test.done();
  });
};

exports.inflateRaw = function(test){
  gbuf.inflateRaw(rawDeflated, function(data){
    test.equal(data, uncompressedData);
    test.done();
  });
};

exports.gzip = function(test){
  gbuf.gzip(uncompressedData, function(data){
    test.equal(data.inspect(), gzipped.inspect());
    test.done();
  });
};

exports.gunzip = function(test){
  gbuf.gunzip(gzipped, function(data){
    test.equal(data, uncompressedData);
    test.done();
  });
};

exports.unzip = function(test){
  gbuf.unzip(gzipped, function(data){
    test.equal(data, uncompressedData);

    gbuf.unzip(deflated, function(data){
      test.equal(data, uncompressedData);
      test.done();
    });
  });  
};