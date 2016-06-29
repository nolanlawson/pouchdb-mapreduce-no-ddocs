'use strict';

function uniq(list) {
  var map = {};
  list.forEach(function (item) {
    map[item] = true;
  });
  return Object.keys(map);
}

module.exports = {
  Promise: require('pouchdb-promise'),
  adapterUrl: function (adapter, name) {
    if (adapter === 'http') {
      return 'http://127.0.0.1:5984/' + name;
    }
    return name;
  },
  // Promise finally util similar to Q.finally
  fin: function (promise, cb) {
    return promise.then(function (res) {
      var promise2 = cb();
      if (typeof promise2.then === 'function') {
        return promise2.then(function () {
          return res;
        });
      }
      return res;
    }, function (reason) {
      var promise2 = cb();
      if (typeof promise2.then === 'function') {
        return promise2.then(function () {
          throw reason;
        });
      }
      throw reason;
    })
  },
  promisify: function (fun, context) {
    return function () {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      return new testUtils.Promise(function (resolve, reject) {
        args.push(function (err, res) {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
        fun.apply(context, args);
      });
    };
  },
  // Delete specified databases
  cleanup: function (dbs, done) {
    dbs = uniq(dbs);
    var num = dbs.length;
    var finished = function () {
      if (--num === 0) {
        done();
      }
    };

    dbs.forEach(function (db) {
      new PouchDB(db).destroy(finished, finished);
    });
  }
};