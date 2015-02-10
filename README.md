# extend-geojson-properties
Extend properties of geojson objects from separate dataset of jsons.

## Installation 
For node.js or with browserify
```
npm install extend-geojson-properties
```
To include in html page, download file [index.js](https://raw.githubusercontent.com/gagan-bansal/extend-geojson-properties/master/index.js) and rename to extend-geojson-properties.js
```html
<script type="text/javascript" src="path/to/extend-geojson-properties.js"></script>
```
This create global variable **extendGeoJSON**.

## Usage
This module return a function or create global function named **extendGeoJSON** that extends the geojson properties.

```javascript 
var extendGeoJSON = require('extend-geojson-properties');
extentGeoJSON( geojsons, dataSet, joinMap);
```
* **geojsons** array of features
* **dataSet** array of json objects from which properties need to be picked
* **joinMap** joining rules

joinMap structure must be like:
```
var joinMap = { 
  geoKey: ... , 
  dataKey: ... ,
  popertyMap: ...
}
```
* **geoKey** property key or feature id in geojson features that can be used as join key  
* **dataKey** key name in json data that will be used as join key i.e. has same value as of geoKey
* **propertyMap [optional]** if not given extend all the keys of dataSet object (except **dataKey**) to geojson properties. If you want selective keys to be extended then provide array of objects of mapping among the items that need to be extend to geojson as properties   
 ```javascript
    {
      geoProperty: // string,  key path in geojson feature property name 
      dataProperty: // string, key path in dataSet object property/attributes name 
    }
 ```

## Example
Here is the sample data set that I use for test also.

Original geojsons:

```javascript
    var geojsons = [{
        type:'Feature',
        id: 'id1',
        geometry: {type: 'Point', coordinates: [34,50]},
        properties: { name: 'name1' }
      }, {
        type:'Feature',
        id: 'id3',
        geometry: {type: 'Point', coordinates: [10,35]},
        properties: { name: 'name3'}
      }, {
        type:'Feature',
        id: 'id2',
        geometry: {type: 'Point', coordinates: [-30,-50]},
        properties: { name: 'name2'}
      }];
```
Dataset containing the attributes that we want to extend to geojsons:
```javascript
    var joinDataSet = [{
        attr1: 'name1',
        attr2: 'val1-2',
        attr3: {field : 'val1-3',count:23}
      }, {
        attr1: 'name2',
        attr2: 'val2-2',
        attr3: {field : 'val2-3',count:2}
      }, {
        attr1: 'name3',
        attr2: 'val3-2',
        attr3: {field : 'val3-3',count:105}
      }];
```
**Case 1** joinMap does not contain the propertyMap
```javascript
var joinMap = {
  geoKey:'properties.name', //here geoKey can be feature 'id' also 
  dataKey: 'attr1'};
extentGeoJSON(geojsons,dataSet,joinMap);
```
**Output of case 1** Now geojsons contains the extended properties like this:
```jsvascript 
    [{
      type:'Feature',
      id: 'id1',
      geometry: {type: 'Point', coordinates: [34,50]},
      properties: {
        name: 'name1',
        attr2: 'val1-2',
        attr3: {field : 'val1-3',count:23}
      }
    }, {
      type:'Feature',
      id: 'id3',
      geometry: {type: 'Point', coordinates: [10,35]},
      properties: {
        name: 'name3',
        attr2: 'val3-2',
        attr3: {field : 'val3-3',count:105}
      }
    }, {
      type:'Feature',
      id: 'id2',
      geometry: {type: 'Point', coordinates: [-30,-50]},
      properties: {
        name: 'name2',
        attr2: 'val2-2',
        attr3: {field : 'val2-3',count:2}
      }
    }]
```
**Case 2** joinMap contains the propertyMap
```javascript
    var joinMap = {
      geoKey:'properties.name', //here geoKey can be feature 'id' also 
      dataKey: 'attr1',
      propertyMap:[{
          geoProperty: 'prop1',
          dataProperty:'attr2'
        }, {
          geoProperty: 'prop2',
          dataProperty: 'attr3.field'
        }, {
          geoProperty: 'count',
          dataProperty: 'attr3.count'
        }]
    };
```
extentGeoJSON(geojsons,dataSet,joinMap);
```
** Output of case 2** Now geojsons contains the extended properties like this:
```jsvascript 
    [{
      type:'Feature',
      id: 'id1',
      geometry: {type: 'Point', coordinates: [34,50]},
      properties: {
        name: 'name1',
        prop1: 'val1-2',
        prop2: 'val1-3',
        count: 23
      }
    }, {
      type:'Feature',
      id: 'id3',
      geometry: {type: 'Point', coordinates: [10,35]},
      properties: {
        name: 'name3',
        prop1: 'val3-2',
        prop2: 'val3-3',
        count: 105
      }
    }, {
      type:'Feature',
      id: 'id2',
      geometry: {type: 'Point', coordinates: [-30,-50]},
      properties: {
        name: 'name2',
        prop1: 'val2-2',
        prop2: 'val2-3',
        count:2
      }
    }]
```

##License
This project is licensed under the terms of the MIT license.
