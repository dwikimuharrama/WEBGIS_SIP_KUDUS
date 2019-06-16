var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
        var lyr_GoogleImagery_1 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });var format_BatasAdministrasi_3 = new ol.format.GeoJSON();
var features_BatasAdministrasi_3 = format_BatasAdministrasi_3.readFeatures(json_BatasAdministrasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BatasAdministrasi_3.addFeatures(features_BatasAdministrasi_3);var lyr_BatasAdministrasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasi_3, 
                style: style_BatasAdministrasi_3,
                title: '<img src="styles/legend/BatasAdministrasi_3.png" /> Batas Administrasi'
            });var format_JalanSetapak_4 = new ol.format.GeoJSON();
var features_JalanSetapak_4 = format_JalanSetapak_4.readFeatures(json_JalanSetapak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanSetapak_4.addFeatures(features_JalanSetapak_4);var lyr_JalanSetapak_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanSetapak_4, 
                style: style_JalanSetapak_4,
                title: '<img src="styles/legend/JalanSetapak_4.png" /> Jalan Setapak'
            });var format_JalanLingkungan_5 = new ol.format.GeoJSON();
var features_JalanLingkungan_5 = format_JalanLingkungan_5.readFeatures(json_JalanLingkungan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLingkungan_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanLingkungan_5.addFeatures(features_JalanLingkungan_5);var lyr_JalanLingkungan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLingkungan_5, 
                style: style_JalanLingkungan_5,
                title: '<img src="styles/legend/JalanLingkungan_5.png" /> Jalan Lingkungan'
            });var format_JalanLokal_6 = new ol.format.GeoJSON();
var features_JalanLokal_6 = format_JalanLokal_6.readFeatures(json_JalanLokal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanLokal_6.addFeatures(features_JalanLokal_6);var lyr_JalanLokal_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLokal_6, 
                style: style_JalanLokal_6,
                title: '<img src="styles/legend/JalanLokal_6.png" /> Jalan Lokal'
            });var format_JalanKolektor_7 = new ol.format.GeoJSON();
var features_JalanKolektor_7 = format_JalanKolektor_7.readFeatures(json_JalanKolektor_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanKolektor_7.addFeatures(features_JalanKolektor_7);var lyr_JalanKolektor_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanKolektor_7, 
                style: style_JalanKolektor_7,
                title: '<img src="styles/legend/JalanKolektor_7.png" /> Jalan Kolektor'
            });var format_JalanArteri_8 = new ol.format.GeoJSON();
var features_JalanArteri_8 = format_JalanArteri_8.readFeatures(json_JalanArteri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanArteri_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanArteri_8.addFeatures(features_JalanArteri_8);var lyr_JalanArteri_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanArteri_8, 
                style: style_JalanArteri_8,
                title: '<img src="styles/legend/JalanArteri_8.png" /> Jalan Arteri'
            });var format_JalanSetapak_9 = new ol.format.GeoJSON();
var features_JalanSetapak_9 = format_JalanSetapak_9.readFeatures(json_JalanSetapak_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSetapak_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanSetapak_9.addFeatures(features_JalanSetapak_9);var lyr_JalanSetapak_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanSetapak_9, 
                style: style_JalanSetapak_9,
                title: '<img src="styles/legend/JalanSetapak_9.png" /> Jalan Setapak'
            });var format_JalanLingkungan_10 = new ol.format.GeoJSON();
var features_JalanLingkungan_10 = format_JalanLingkungan_10.readFeatures(json_JalanLingkungan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLingkungan_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanLingkungan_10.addFeatures(features_JalanLingkungan_10);var lyr_JalanLingkungan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLingkungan_10, 
                style: style_JalanLingkungan_10,
                title: '<img src="styles/legend/JalanLingkungan_10.png" /> Jalan Lingkungan'
            });var format_JalanLokal_11 = new ol.format.GeoJSON();
var features_JalanLokal_11 = format_JalanLokal_11.readFeatures(json_JalanLokal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanLokal_11.addFeatures(features_JalanLokal_11);var lyr_JalanLokal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanLokal_11, 
                style: style_JalanLokal_11,
                title: '<img src="styles/legend/JalanLokal_11.png" /> Jalan Lokal'
            });var format_JalanKolektor_12 = new ol.format.GeoJSON();
var features_JalanKolektor_12 = format_JalanKolektor_12.readFeatures(json_JalanKolektor_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanKolektor_12.addFeatures(features_JalanKolektor_12);var lyr_JalanKolektor_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanKolektor_12, 
                style: style_JalanKolektor_12,
                title: '<img src="styles/legend/JalanKolektor_12.png" /> Jalan Kolektor'
            });var format_JalanArteri_13 = new ol.format.GeoJSON();
var features_JalanArteri_13 = format_JalanArteri_13.readFeatures(json_JalanArteri_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanArteri_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_JalanArteri_13.addFeatures(features_JalanArteri_13);var lyr_JalanArteri_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanArteri_13, 
                style: style_JalanArteri_13,
                title: '<img src="styles/legend/JalanArteri_13.png" /> Jalan Arteri'
            });var format_Permukiman_14 = new ol.format.GeoJSON();
var features_Permukiman_14 = format_Permukiman_14.readFeatures(json_Permukiman_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Permukiman_14.addFeatures(features_Permukiman_14);var lyr_Permukiman_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Permukiman_14, 
                style: style_Permukiman_14,
                title: '<img src="styles/legend/Permukiman_14.png" /> Permukiman'
            });var format_LokasiIndustri_15 = new ol.format.GeoJSON();
var features_LokasiIndustri_15 = format_LokasiIndustri_15.readFeatures(json_LokasiIndustri_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiIndustri_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LokasiIndustri_15.addFeatures(features_LokasiIndustri_15);var lyr_LokasiIndustri_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiIndustri_15, 
                style: style_LokasiIndustri_15,
                title: '<img src="styles/legend/LokasiIndustri_15.png" /> Lokasi Industri'
            });var format_PolygonIndustri_16 = new ol.format.GeoJSON();
var features_PolygonIndustri_16 = format_PolygonIndustri_16.readFeatures(json_PolygonIndustri_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolygonIndustri_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PolygonIndustri_16.addFeatures(features_PolygonIndustri_16);var lyr_PolygonIndustri_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolygonIndustri_16, 
                style: style_PolygonIndustri_16,
                title: '<img src="styles/legend/PolygonIndustri_16.png" /> Polygon Industri'
            });
var group_Jalan = new ol.layer.Group({
                                layers: [lyr_JalanSetapak_9,lyr_JalanLingkungan_10,lyr_JalanLokal_11,lyr_JalanKolektor_12,lyr_JalanArteri_13,],
                                title: "Jalan"});
var group_Administrasi = new ol.layer.Group({
                                layers: [lyr_Sungai_2,lyr_BatasAdministrasi_3,lyr_JalanSetapak_9,lyr_JalanLingkungan_10,lyr_JalanLokal_11,lyr_JalanKolektor_12,lyr_JalanArteri_13,],
                                title: "Administrasi"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleImagery_1,],
                                title: "Basemaps"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleImagery_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_BatasAdministrasi_3.setVisible(true);lyr_JalanSetapak_4.setVisible(true);lyr_JalanLingkungan_5.setVisible(true);lyr_JalanLokal_6.setVisible(true);lyr_JalanKolektor_7.setVisible(true);lyr_JalanArteri_8.setVisible(true);lyr_JalanSetapak_9.setVisible(true);lyr_JalanLingkungan_10.setVisible(true);lyr_JalanLokal_11.setVisible(true);lyr_JalanKolektor_12.setVisible(true);lyr_JalanArteri_13.setVisible(true);lyr_Permukiman_14.setVisible(true);lyr_LokasiIndustri_15.setVisible(true);lyr_PolygonIndustri_16.setVisible(true);
var layersList = [group_Basemaps,group_Administrasi,lyr_Permukiman_14,lyr_LokasiIndustri_15,lyr_PolygonIndustri_16];
lyr_Sungai_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasAdministrasi_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanSetapak_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanLingkungan_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanLokal_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanKolektor_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanArteri_8.set('fieldAliases', {'NAMRJL': 'Keterangan', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanSetapak_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanLingkungan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanLokal_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanKolektor_12.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanArteri_13.set('fieldAliases', {'NAMRJL': 'Keterangan', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Permukiman_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LokasiIndustri_15.set('fieldAliases', {'Ket': 'Ket', });
lyr_PolygonIndustri_16.set('fieldAliases', {'id': 'id', 'Nama_Indus': 'Nama', 'Alamat': 'Alamat', 'Luas': 'Luas', });
lyr_Sungai_2.set('fieldImages', {'NAMOBJ': 'Hidden', 'JNSSNG': 'Hidden', 'KLSSNG': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'NAMWS': 'Hidden', 'NAMDAS': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_BatasAdministrasi_3.set('fieldImages', {'KARKTR': 'Hidden', 'STSBTS': 'Hidden', 'FCODE': 'Hidden', 'KELAS': 'Hidden', 'UUPP': 'Hidden', 'LOKASI': 'Hidden', 'REMARK': 'TextEdit', 'NAMOBJ': 'Hidden', 'ADMIN1': 'Hidden', 'ADMIN2': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'WAKLD1': 'Hidden', 'WAKLD2': 'Hidden', 'WADKC1': 'Hidden', 'WADKC2': 'Hidden', 'WAKBK1': 'Hidden', 'WAKBK2': 'Hidden', 'WAPRO1': 'Hidden', 'WAPRO2': 'Hidden', 'TIPTBT': 'Hidden', 'PJGBTS': 'Hidden', 'KLBADM': 'Hidden', 'TIPLOK': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanSetapak_4.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanLingkungan_5.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanLokal_6.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanKolektor_7.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanArteri_8.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanSetapak_9.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanLingkungan_10.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanLokal_11.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanKolektor_12.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_JalanArteri_13.set('fieldImages', {'NAMRJL': 'Hidden', 'KONRJL': 'Hidden', 'MATRJL': 'Hidden', 'FGSRJL': 'Hidden', 'UTKRJL': 'Hidden', 'TOLRJL': 'Hidden', 'WLYRJL': 'Hidden', 'AUTRJL': 'Hidden', 'KLSRJL': 'Hidden', 'SPCRJL': 'Hidden', 'JPARJL': 'Hidden', 'ARHRJL': 'Hidden', 'STARJL': 'Hidden', 'KLLRJL': 'Hidden', 'MEDRJL': 'Hidden', 'LOCRJL': 'Hidden', 'JARRJL': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_Permukiman_14.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_LokasiIndustri_15.set('fieldImages', {'Ket': 'TextEdit', });
lyr_PolygonIndustri_16.set('fieldImages', {'id': 'TextEdit', 'Nama_Indus': 'TextEdit', 'Alamat': 'TextEdit', 'Luas': '', });
lyr_Sungai_2.set('fieldLabels', {});
lyr_BatasAdministrasi_3.set('fieldLabels', {});
lyr_JalanSetapak_4.set('fieldLabels', {});
lyr_JalanLingkungan_5.set('fieldLabels', {});
lyr_JalanLokal_6.set('fieldLabels', {});
lyr_JalanKolektor_7.set('fieldLabels', {});
lyr_JalanArteri_8.set('fieldLabels', {});
lyr_JalanSetapak_9.set('fieldLabels', {});
lyr_JalanLingkungan_10.set('fieldLabels', {});
lyr_JalanLokal_11.set('fieldLabels', {});
lyr_JalanKolektor_12.set('fieldLabels', {});
lyr_JalanArteri_13.set('fieldLabels', {});
lyr_Permukiman_14.set('fieldLabels', {'REMARK': 'no label', });
lyr_LokasiIndustri_15.set('fieldLabels', {'Ket': 'no label', });
lyr_PolygonIndustri_16.set('fieldLabels', {'id': 'no label', 'Nama_Indus': 'inline label', 'Alamat': 'inline label', 'Luas': 'no label', });
lyr_PolygonIndustri_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});