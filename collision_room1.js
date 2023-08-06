(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("collision_room1",
{ "compressionlevel":-1,
 "height":18,
 "infinite":false,
 "layers":[
        {
         "data":[116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1456, 1457, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1472, 1473, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1488, 1489, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1456, 1457, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 1456, 1457, 1456, 1472, 1473, 0, 0, 116,
            116, 0, 0, 0, 0, 0, 0, 1472, 1473, 1472, 1488, 1489, 0, 0, 116,
            116, 0, 0, 0, 1456, 1456, 1457, 1488, 1489, 1488, 1489, 0, 0, 0, 116,
            116, 0, 0, 0, 1472, 1472, 1473, 0, 1488, 1488, 1489, 0, 0, 0, 116,
            116, 0, 0, 0, 1488, 1488, 1489, 0, 1488, 1489, 0, 0, 0, 0, 116,
            116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116],
         "height":18,
         "id":1,
         "name":"border",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 329, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":3,
         "name":"floor",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1548, 1549, 1550, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1564, 1565, 1566, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1580, 1581, 1582, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1596, 1597, 1598, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":2,
         "name":"sofa",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1253, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1269, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1285, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1300, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1316, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1332, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":4,
         "name":"lamp",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1540, 1541, 1542, 1543, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1556, 1557, 1558, 1559, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1572, 1573, 1574, 1575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":5,
         "name":"bookshelves",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 1468, 1469, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1484, 1485, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1500, 1501, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1516, 1517, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":6,
         "name":"fireplace",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1124, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1140, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":7,
         "name":"plants",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816,
            1816, 0, 0, 0, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816,
            1816, 1816, 1816, 1816, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 0, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 0, 0, 1816, 1816, 1816, 1816, 0, 0, 0, 0, 1816,
            1816, 1816, 1816, 0, 0, 0, 1816, 0, 1816, 1816, 0, 0, 0, 0, 0,
            1816, 0, 1816, 0, 0, 0, 1816, 1816, 1816, 0, 0, 0, 0, 0, 0,
            1816, 0, 0, 0, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816, 1816,
            1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816, 1816,
            1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
            1816, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 1816, 1816, 0, 0, 1816,
            1816, 0, 0, 0, 0, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 0, 0, 1816,
            1816, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 0, 1816, 0, 0, 1816,
            1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816],
         "height":18,
         "id":11,
         "name":"Collisions",
         "opacity":0.64,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 959, 960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 975, 976, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 991, 992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":8,
         "name":"desk",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1456, 1457, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1341, 1342, 1341, 1342, 1472, 1473, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1357, 1358, 1357, 1358, 1488, 1489, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":18,
         "id":10,
         "name":"dresser",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }],
 "nextlayerid":12,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.1",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/tiles.tsx"
        }, 
        {
         "firstgid":392,
         "source":"..\/interior.tsx"
        }, 
        {
         "firstgid":1816,
         "source":"..\/Collision.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":15
});