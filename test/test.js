'use strict';
var clone = require('clone'),
  expect = require('chai').expect,
  testData = require('./testdata.js');
describe('extendGeojson',function() {
  var extGeoJSON = require('../index.js');
  it('including propertyMap',function() {
    debugger;
    var geojsons = clone(testData.geojsons)
    extGeoJSON(
      geojsons,
      testData.joinDataSet,
      testData.joinMap);
    expect(geojsons).to.be.deep.equal(
      testData.extendedGeojsons);
  });
  it('without propertyMap',function() {
    var joinMap2 = {
      geoKey: testData.joinMap.geoKey,
      dataKey: testData.joinMap.dataKey
    };
    var geojsons2 = clone(testData.geojsons);
    extGeoJSON(
      geojsons2,
      testData.joinDataSet,
      joinMap2);
    expect(geojsons2).to.be.deep.equal(
      testData.extendedGeojsonsWithoutPropMap);
  });
});
