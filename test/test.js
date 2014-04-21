'use strict';
var expect = require('chai').expect;
var testData = require('./testdata.js');
describe('extendGeojson',function() {
  var extGeoJSON = require('../index.js');
  extGeoJSON(
    testData.geojsons,
    testData.joinDataSet,
    testData.joinMap);
  it('properties',function() {
      expect(testData.geojsons).to.be.deep.equal(
        testData.extendedGeojsons);
  });
});
