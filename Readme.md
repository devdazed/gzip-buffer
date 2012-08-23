[![build status](https://secure.travis-ci.org/devdazed/gzip-buffer.png)](http://travis-ci.org/devdazed/gzip-buffer)

# gzip-buffer

  GZips and GUnzips via a buffer rather than a stream
  
  The nodejs ZLib library is great when streaming compressed or uncompressed data,
  however, if you would like to store this data locally, (maybe for caching?)
  it is rather difficult. gzip-buffer will un/compress your data and callback
  with the results in a buffer.

# installation

    npm install gzip-buffer

# example

    var gbuf = require('gzip-buffer');
    
    gbuf.gzip('some data', function(zipped){
      gbuf.gunzip(zipped, function(unzipped){
        console.log(unzipped.toString());
      });
    });    

## License 

(The MIT License)

Copyright (c) 2011 Russell Bradberry &lt;rbradberry@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.