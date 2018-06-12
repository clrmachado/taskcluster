const API             = require('../src/api');
const assert          = require('assert');
const Promise         = require('promise');
const debug           = require('debug')('base:test:nonceManager');

suite('nonceManager test', function() {
  // Create a new nonceManager for each test
  let nonceManager = null;
  setup(function() {
    nonceManager = API.nonceManager({size: 5});
  });

  test('accept one', function() {
    return new Promise(function(accept, reject) {
      nonceManager('my-nonce', 12, function(err) {
        if (err) {reject(err);}
        accept();
      });
    });
  });

  test('Can\'t accept twice', function() {
    return new Promise(function(accept, reject) {
      nonceManager('my-nonce', 12, function(err) {
        if (err) {reject(err);}
        accept();
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 12, function(err) {
          if (err) {reject(err);}
          accept();
        });
      }).then(function() {
        assert(false, 'Expected an error');
      }, function(err) {
        debug('Got expected error: %s, as JSON %j', err, err);
      });
    });
  });

  test('Not confused by different nounces', function() {
    return new Promise(function(accept, reject) {
      nonceManager('my-nonce', 12, function(err) {
        if (err) {reject(err);}
        accept();
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('another-nonce', 12, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    });
  });

  test('Not confused by different timestamps', function() {
    return new Promise(function(accept, reject) {
      nonceManager('my-nonce', 12, function(err) {
        if (err) {reject(err);}
        accept();
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 15, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    });
  });

  test('Handle size + 1 invocations', function() {
    return new Promise(function(accept, reject) {
      nonceManager('my-nonce', 12, function(err) {
        if (err) {reject(err);}
        accept();
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 15, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 17, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 18, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 19, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 120, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 153, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    }).then(function() {
      return new Promise(function(accept, reject) {
        nonceManager('my-nonce', 158, function(err) {
          if (err) {reject(err);}
          accept();
        });
      });
    });
  });
});
