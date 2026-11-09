var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 0.409000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr__1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cумма температур почвы<br />\
    <img src="styles/legend/_1_0.png" /> менее 1600<br />\
    <img src="styles/legend/_1_1.png" /> 1600 - 1800<br />\
    <img src="styles/legend/_1_2.png" /> 1800 - 2000<br />\
    <img src="styles/legend/_1_3.png" /> 2000 - 2200<br />\
    <img src="styles/legend/_1_4.png" /> 2200 - 2400<br />\
    <img src="styles/legend/_1_5.png" /> более 2400<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5746288.299159, 7563682.738619, 6644734.517880, 8783586.020859]
        })
    });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Тяжелые металлы в почве',
                interactive: true,
    title: 'Tяжелые металлы в почве<br />\
    <img src="styles/legend/_2_0.png" /> Районы по которым обследование почв не проводилось<br />\
    <img src="styles/legend/_2_1.png" /> Районы по которым проведено обследование почв<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Распаханность почв',
                interactive: true,
    title: 'Pаспаханность почв<br />\
    <img src="styles/legend/_3_0.png" /> 0 - 5 (очень слабо распаханные)<br />\
    <img src="styles/legend/_3_1.png" /> 5 - 10 (слабо распаханные)<br />\
    <img src="styles/legend/_3_2.png" /> 10 - 15 (средне распаханные)<br />\
    <img src="styles/legend/_3_3.png" /> 15 - 20 (сильно распаханные<br />\
    <img src="styles/legend/_3_4.png" /> 20 - 24 (очень сильно распаханные)<br />' });

lyr_ESRIStandard_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr__1,lyr__2,lyr__3];
lyr__2.set('fieldAliases', {'name': 'Район', 'Co': 'Co, мг/кг', 'Cu': 'Cu, мг/кг', 'Zn': 'Zn, мг/кг', });
lyr__3.set('fieldAliases', {'name': 'название района', 'area': 'площадь, га', 'plow': 'площадь обрабатываемых земель, га', });
lyr__2.set('fieldImages', {'name': 'TextEdit', 'Co': 'TextEdit', 'Cu': 'TextEdit', 'Zn': 'TextEdit', });
lyr__3.set('fieldImages', {'name': 'TextEdit', 'area': 'TextEdit', 'plow': 'TextEdit', });
lyr__2.set('fieldLabels', {'name': 'inline label - always visible', 'Co': 'inline label - always visible', 'Cu': 'inline label - always visible', 'Zn': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'name': 'inline label - always visible', 'area': 'inline label - always visible', 'plow': 'inline label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});