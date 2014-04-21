(function()  {
  var testData = {
    joinMap:{
      geoKey:'properties.name',
      dataKey: 'attr1',
      propertyMap:[
        {
          geoProperty: 'prop1',
          dataProperty:'attr2'},
        {
          geoProperty: 'prop2',
          dataProperty: 'attr3.field'},
        {
          geoProperty: 'count',
          dataProperty: 'attr3.count'}
      ]
    },
    geojsons: [
      {
        type:'Feature',
        id: 'id1',
        geometry: {type: 'Point', coordinates: [34,50]},
        properties: {
          name: 'name1'
        }
      },
      {
        type:'Feature',
        id: 'id3',
        geometry: {type: 'Point', coordinates: [10,35]},
        properties: {
          name: 'name3'
        }
      },
      {
        type:'Feature',
        id: 'id2',
        geometry: {type: 'Point', coordinates: [-30,-50]},
        properties: {
          name: 'name2'
        }
      }
    ],
    joinDataSet: [
      {
        attr1: 'name1',
        attr2: 'val1-2',
        attr3: {field : 'val1-3',count:23}
      },
      {
        attr1: 'name2',
        attr2: 'val2-2',
        attr3: {field : 'val2-3',count:2}
      },
      {
        attr1: 'name3',
        attr2: 'val3-2',
        attr3: {field : 'val3-3',count:105}
      }
    ],
    extendedGeojsons: [
      {
        type:'Feature',
        id: 'id1',
        geometry: {type: 'Point', coordinates: [34,50]},
        properties: {
          name: 'name1',
          prop1: 'val1-2',
          prop2: 'val1-3',
          count: 23
        }
      },
      {
        type:'Feature',
        id: 'id3',
        geometry: {type: 'Point', coordinates: [10,35]},
        properties: {
          name: 'name3',
          prop1: 'val3-2',
          prop2: 'val3-3',
          count: 105
        }
      },
      {
        type:'Feature',
        id: 'id2',
        geometry: {type: 'Point', coordinates: [-30,-50]},
        properties: {
          name: 'name2',
          prop1: 'val2-2',
          prop2: 'val2-3',
          count:2
        }
      }
    ],
  
  }
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = testData;
  } else if(window) {
    window.testData = testData;
  }

})();
  
