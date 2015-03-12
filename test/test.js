'use strict';
var clone = require('clone'),
  expect = require('chai').expect,
  testData = require('./testdata.js');
describe('extendGeojson',function() {
  var extGeoJSON = require('../index.js');
  it('extend array of features while including propertyMap in joinMap',function() {
    debugger;
    var features = clone(testData.geojson.features)
    extGeoJSON(
      features,
      testData.joinDataSet,
      testData.joinMap);
    expect(features).to.be.deep.equal(
      testData.extendedGeojsons);
  });
  it('extend array of features without propertyMap in joinMap',function() {
    var joinMap2 = {
      geoKey: testData.joinMap.geoKey,
      dataKey: testData.joinMap.dataKey
    };
    var features2 = clone(testData.geojson.features);
    extGeoJSON(
      features2,
      testData.joinDataSet,
      joinMap2);
    expect(features2).to.be.deep.equal(
      testData.extendedGeojsonsWithoutPropMap);
  });
  it('extend FeatureCollection while including propertyMap in joinMap',function() {
    debugger;
    var featColl = clone(testData.geojson)
    extGeoJSON(
      featColl,
      testData.joinDataSet,
      testData.joinMap);
    expect(featColl.features).to.be.deep.equal(
      testData.extendedGeojsons);
  });
});
