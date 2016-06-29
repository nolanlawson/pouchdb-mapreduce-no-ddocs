'use strict';

var thePlugin = require('../');
global.PouchDB = require('pouchdb-memory');
global.PouchDB.plugin({
  query: thePlugin._search_query,
  viewCleanup: thePlugin._search_viewCleanup
});
global.testUtils = require('./utils');
var chai = require('chai');
global.should = chai.should();
chai.use(require('chai-as-promised'));
describe('pouchdb-mapreduce-no-ddocs test suite', function () {
  this.timeout(120000);
  require('./test.mapreduce');
  require('./test.persisted');
  require('./test.views');
});