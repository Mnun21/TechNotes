/*
Geo Json is a specification for storing geographic data in JSON form
Can store vector data with Points, lines, and polygons

JSON - JavaScript Object Notation
JavaScript understands binary objects which can be converted to text and vice versa
1. text can be stored in files and in a db
2. text can be easily sent across the internet to be used in a web application

*/

/* 
GeoJSON Point

 a single set of coordinates x,y and z


 {
     "type": "Point",
     "coordinates": [longitude, latitude] // elevation as well
 }

 //access longitude => coordinates[0][1]


 {
     "type": "MultiPoint",
     "coordinates": [[long, lat], [long, lat], [long, lat]]
 }

*/

/*
GeoJSON Line
//similar to MultiPoint format (an array of point coordinates)
//points are interpreted as vertices for a line that connects
//Analogous to a path in the Azure EcoSystem 
//two-dimensional array 

{

    "type": "LineString",
    "coordinates": [[], [], []]
}


{
    // In Azure => Polyline
    // three distinct lines that make up one single feature
    // three dimensional array
    {
        "type": "MultiLineString"
        "coordinates": [ [ [],[],[] ], 
                          [ [], [], [] ],
                           [ [], [], [] ]
                        ]
    }
}
*/

/*
GeoJSON Polygon 

//multiple lines 
//a line has the same beginning and end
//In Azure => reffered to as a ring 
//first ring is the outer ring with the subsequent rings being the inner rings
//ex first ring(outer) would be the island second ring(inner) would be the lake 

{
    "type": "Polygon",
    "coordinates": [ [ [1],[2],[3],[1]],
                      [1], [5], [6], [1]
                    ]
}

//4 dimensional array
//multiple polygons
//same structure as a polygon in Azure

{
    "type": "MultiPolygon",
    "coordinates": [ 
                        [ [ [],[],[],[] ], [ [],[],[],[] ] ],

                        [ [ [],[],[],[] ] ]

                    ]
}
*/

//points, lines, and polygons are single geometry
//multi-points, multi-lines, multi-polygons as arrays of geometry to form one single feature

/*

{
    "type": "feature",

    "geometry": {
        "type": "Point",
        "coordinates": []
    }

    "properties": {
        "var": "value"
    }
}


{
    "type": "featureCollection",
    "features": [
        {
            "type": "feature",
            "geometry": {
                "type": "Point",
                "coordinates":[long, lat]
            },
            "properties": {
                "var": "val"
            }
        }
    ],

    [
        {
            "type": "feature",
            "geometry": {
                "type": "MultiPoint"
                "coordinates": [ [long,lat], [long,lat], [long,lat] ]
            },

            {
                "properties": 
            }

        }
    ]
}

*/