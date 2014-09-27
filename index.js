//extend-geojson-properties
(function() {
  var extendGeoJSON = function(geojsons,jsonDataSet,jsonMap) {
    if( !Array.isArray(geojsons) || !Array.isArray(jsonDataSet)) return false;
    var geoFeatIndex = {};
    geojsons.forEach(function(f) {
      geoFeatIndex[valueAt(f,jsonMap.geoKey)] = f;
    });
    jsonDataSet.forEach(function(data) {
      var key = valueAt(data,jsonMap.dataKey);
      var feat = geoFeatIndex[key];
      if (feat) {
        jsonMap.propertyMap.forEach(function(pair) {
          feat.properties[pair.geoProperty] = valueAt(data,pair.dataProperty);
        });
      }
    });
  };
  function valueAt(obj,path) {
    //taken from http://stackoverflow.com/a/6394168/713573
    function index(obj,i) { return obj[i]; }
    return path.split('.').reduce(index, obj);
  }

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = extendGeoJSON;
  } 
  if(typeof window !== 'undefined') {
    window.extendGeoJSON = extendGeoJSON;
  }
})();
