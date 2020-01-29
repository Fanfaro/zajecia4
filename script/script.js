

require(["esri/WebMap", "esri/Map", "esri/views/MapView", "esri/layers/GraphicsLayer",
"esri/widgets/Sketch"], function(WebMap, Map, MapView, GraphicsLayer, Sketch){
    let topo = document.getElementById("topo");
    let sat = document.getElementById("sat");
    let OSM = document.getElementById("OSM");
    let agol = document.getElementById("agol")
    var graphicsLayer = new GraphicsLayer();

    let webmap = new WebMap({portalItem: {id: "131eb8b1a13640ddbb38049cd88941c1"}});
    let map1 = new Map({basemap:'topo', layers: [graphicsLayer]}); //słowo klucz new + nazwa modułu
    let map2 = new Map({basemap:'satellite'});
    let map3 = new Map({basemap:'osm'});

    let mapContainer = new MapView({
        container: "itemMap", //miejsce gdzie chcemy osadzić mapę (klasa z pliku html)
        map: map1, //nasza zmienna z mapą bazową zdefiniowaną wcześniej
        zoom: 10,
        center: [22.34, 51.15]
    });




            var sketch = new Sketch({
                view: mapContainer,
                layer: graphicsLayer
              });
        
              mapContainer.ui.add(sketch, "top-right");





    topo.addEventListener("click",function(){
        mapContainer.map = map1;
    });

    sat.addEventListener("click",function(){
        mapContainer.map = map2;
    });

    OSM.addEventListener("click",function(){
        mapContainer.map = map3;
    });

    agol.addEventListener("click", function(){
        mapContainer.map = webmap;
    });

})




