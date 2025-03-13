ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:26912").setExtent([385740.870400, 5576704.390527, 391738.903186, 5580153.959242]);
var wms_layers = [];


        var lyr_SatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Satellite Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_ElevationModel_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Elevation Model',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ElevationModel_1.png",
                                attributions: ' ',
                                projection: 'EPSG:26912',
                                alwaysInRange: true,
                                imageExtent: [388252.513400, 5577524.084000, 389099.513400, 5579132.084000]
                            })
                        });
var format_ProblemArea_2 = new ol.format.GeoJSON();
var features_ProblemArea_2 = format_ProblemArea_2.readFeatures(json_ProblemArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26912'});
var jsonSource_ProblemArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProblemArea_2.addFeatures(features_ProblemArea_2);
var lyr_ProblemArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProblemArea_2, 
                style: style_ProblemArea_2,
                popuplayertitle: 'Problem Area',
                interactive: false,
                title: '<img src="styles/legend/ProblemArea_2.png" /> Problem Area'
            });
var format_Design1Mainlines_3 = new ol.format.GeoJSON();
var features_Design1Mainlines_3 = format_Design1Mainlines_3.readFeatures(json_Design1Mainlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26912'});
var jsonSource_Design1Mainlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Design1Mainlines_3.addFeatures(features_Design1Mainlines_3);
var lyr_Design1Mainlines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Design1Mainlines_3, 
                style: style_Design1Mainlines_3,
                popuplayertitle: 'Design 1 Mainlines',
                interactive: true,
                title: '<img src="styles/legend/Design1Mainlines_3.png" /> Design 1 Mainlines'
            });
var group_Design1 = new ol.layer.Group({
                                layers: [lyr_Design1Mainlines_3,],
                                fold: "open",
                                title: 'Design 1'});
var group_WetYearsSatelliteImagery = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Wet Years Satellite Imagery'});

lyr_SatelliteImagery_0.setVisible(true);lyr_ElevationModel_1.setVisible(true);lyr_ProblemArea_2.setVisible(true);lyr_Design1Mainlines_3.setVisible(false);
var layersList = [lyr_SatelliteImagery_0,lyr_ElevationModel_1,lyr_ProblemArea_2,group_Design1];
lyr_ProblemArea_2.set('fieldAliases', {'id': 'id', 'area sq m': 'area sq m', 'area acres': 'area acres', });
lyr_Design1Mainlines_3.set('fieldAliases', {'MainID': 'MainID', 'Laterals': 'Laterals', 'Lat_Length': 'Lat_Length', 'AreaDrain': 'AreaDrain', 'Length': 'Length', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_ProblemArea_2.set('fieldImages', {'id': 'TextEdit', 'area sq m': 'TextEdit', 'area acres': 'TextEdit', });
lyr_Design1Mainlines_3.set('fieldImages', {'MainID': 'TextEdit', 'Laterals': 'Range', 'Lat_Length': 'TextEdit', 'AreaDrain': 'TextEdit', 'Length': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_ProblemArea_2.set('fieldLabels', {'id': 'hidden field', 'area sq m': 'hidden field', 'area acres': 'hidden field', });
lyr_Design1Mainlines_3.set('fieldLabels', {'MainID': 'inline label - always visible', 'Laterals': 'inline label - visible with data', 'Lat_Length': 'header label - always visible', 'AreaDrain': 'header label - visible with data', 'Length': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Design1Mainlines_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});