/*Basemap*/

var OpenStreetMap_Tile = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
    }
);

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});
/* Map */

var harita = L.map("map", {
    center: [39.82592, 30.32088],
    zoom: 14,
    layers: [OpenTopoMap],
});

/*popup function*/

function onEachFeature(feature, layer) {
    layer.bindPopup('<h2>' + 'Özellikler' + '</h2>' +
        '<ul>' +
        '<li>Parsel No: ' + feature.properties.ParselNo + '</li>' +
        '<li><h3><b>Alan (m2): ' + feature.properties.Alan + '</b><h3></li>' +
        '<li>Mevkii: ' + feature.properties.Mevkii + '</li>' +
        '<li>Nitelik: ' + feature.properties.Nitelik + '</li>' +
        '<li>Ada: ' + feature.properties.Ada + '</li>' +
        '<li>İl: ' + feature.properties.Il + '</li>' +
        '<li>İlçe: ' + feature.properties.Ilce + '</li>' +
        '<li>Pafta: ' + feature.properties.Pafta + '</li>' +
        '<li>Mahalle: ' + feature.properties.Mahalle + '</li>' +
        '<li>R: ' + feature.properties.R + '</li>' +
        '</ul>');
}
/* Arsalar */

var parsel1 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.35063, 39.83831], [30.35085, 39.83865], [30.35093, 39.8388], [30.35101, 39.83897], [30.35107, 39.83929], [30.35152, 39.83918], [30.35164, 39.83914], [30.35201, 39.83903], [30.35224, 39.83898], [30.35217, 39.83873], [30.35189, 39.83817], [30.35177, 39.8382], [30.35163, 39.838], [30.35136, 39.83759], [30.35122, 39.83739], [30.35113, 39.83723], [30.3508, 39.83672], [30.35073, 39.83661], [30.35049, 39.83667], [30.35028, 39.83671], [30.3499, 39.83682], [30.34947, 39.83693], [30.34959, 39.83709], [30.34971, 39.83723], [30.34993, 39.83749], [30.35019, 39.83782], [30.35036, 39.83799], [30.35063, 39.83831]]] }, "properties": { "ParselNo": "192", "Alan": "30.107,17", "Mevkii": "Kuruca", "Nitelik": "Tarla", "Ada": "11083", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-18-a-1-d", "Mahalle": "Keskin", "R":"1/8" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel2 = { "features": [{ "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [[[[30.3164, 39.84254], [30.31618, 39.84227], [30.31616, 39.84224], [30.31609, 39.84218], [30.31597, 39.84211], [30.31587, 39.84206], [30.3158, 39.84202], [30.31525, 39.84161], [30.31538, 39.84142], [30.31546, 39.84133], [30.31559, 39.84139], [30.31576, 39.84148], [30.31593, 39.84155], [30.31625, 39.84166], [30.31644, 39.84174], [30.31671, 39.84198], [30.31685, 39.84219], [30.31694, 39.84238], [30.3164, 39.84254]], [[30.31646, 39.84188], [30.31636, 39.84181], [30.31626, 39.84188], [30.31636, 39.84196], [30.31646, 39.84188]]]] }, "properties": { "ParselNo": "454", "Alan": "7.900,79", "Mevkii": "Pamuklu", "Nitelik": "Tarla", "Ada": "11304", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24b17a2d", "Mahalle": "Hisar", "R":"1/2" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel3 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.32234, 39.83294], [30.3224, 39.83272], [30.32178, 39.83291], [30.32178, 39.83297], [30.32197, 39.83306], [30.32209, 39.833], [30.32234, 39.83294]]] }, "properties": { "ParselNo": "79", "Alan": "970,98", "Mevkii": "Köyiçi", "Nitelik": "Arsa", "Ada": "11324", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-17-a-3-b", "Mahalle": "Hisar", "R":"1/12" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel4 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.32088, 39.82892], [30.32079, 39.82891], [30.32071, 39.82889], [30.32066, 39.82888], [30.32064, 39.82899], [30.32064, 39.82905], [30.32063, 39.82907], [30.32064, 39.8291], [30.32067, 39.8291], [30.32066, 39.82918], [30.32072, 39.82918], [30.32071, 39.82926], [30.32071, 39.82929], [30.3207, 39.8293], [30.3207, 39.82936], [30.3207, 39.82939], [30.32073, 39.82938], [30.32085, 39.82936], [30.32086, 39.82935], [30.32086, 39.82931], [30.32087, 39.82931], [30.32089, 39.82922], [30.32089, 39.82917], [30.32088, 39.82912], [30.32087, 39.82901], [30.32087, 39.82897], [30.32088, 39.82892]]] }, "properties": { "ParselNo": "3", "Alan": "898,10", "Mevkii": "Köyiçi", "Nitelik": "Avlulu ev,ahır ve samanlık", "Ada": "11356", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-17-a-3-c", "Mahalle": "Hisar", "R":"7/94" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel5 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.28591, 39.83136], [30.28586, 39.82956], [30.28567, 39.82956], [30.28548, 39.82955], [30.28549, 39.83025], [30.2855, 39.83105], [30.28552, 39.83137], [30.28578, 39.83136], [30.28591, 39.83136]]] }, "properties": { "ParselNo": "10", "Alan": "6.714,92", "Mevkii": "Vakıflar", "Nitelik": "Tarla", "Ada": "11379", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-16-b-4-c", "Mahalle": "Hisar", "R":"1/2" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } }
var parsel6 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.31003, 39.82264], [30.31039, 39.82248], [30.31013, 39.82217], [30.31009, 39.82212], [30.30999, 39.822], [30.30989, 39.82187], [30.30946, 39.82201], [30.30959, 39.82215], [30.31003, 39.82264]]] }, "properties": { "ParselNo": "445", "Alan": "3.097,61", "Mevkii": "Bozyer", "Nitelik": "Tarla", "Ada": "11381", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-17-d-1-b", "Mahalle": "Hisar", "R":"1/4" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel7 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.28905, 39.8091], [30.28942, 39.80917], [30.28982, 39.80924], [30.29015, 39.8093], [30.2905, 39.80936], [30.29066, 39.80937], [30.29091, 39.80932], [30.29118, 39.80921], [30.29164, 39.80906], [30.29204, 39.80893], [30.29219, 39.80888], [30.29175, 39.80803], [30.29161, 39.80804], [30.29136, 39.80816], [30.29128, 39.8082], [30.29117, 39.80823], [30.29093, 39.80823], [30.29058, 39.80814], [30.29019, 39.80808], [30.28978, 39.80802], [30.28935, 39.8081], [30.28892, 39.80812], [30.28888, 39.80829], [30.28845, 39.80831], [30.28791, 39.80833], [30.28751, 39.80831], [30.28717, 39.80833], [30.28685, 39.80834], [30.28623, 39.80842], [30.28535, 39.8085], [30.28518, 39.80852], [30.28531, 39.80903], [30.28531, 39.80929], [30.2857, 39.8093], [30.28618, 39.80928], [30.28643, 39.80926], [30.28678, 39.80918], [30.28705, 39.80915], [30.28756, 39.8091], [30.28807, 39.8091], [30.28814, 39.80909], [30.28843, 39.80905], [30.28867, 39.80905], [30.28905, 39.8091]]] }, "properties": { "ParselNo": "7", "Alan": "59.931,87", "Mevkii": "Sığır çukuru", "Nitelik": "Tarla", "Ada": "11429", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-16-c-3-a", "Mahalle": "Çukurhisar yeni", "R":"27/257" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel8 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.28623, 39.80842], [30.28624, 39.80819], [30.28636, 39.80774], [30.28638, 39.80732], [30.28568, 39.80738], [30.28463, 39.80717], [30.28452, 39.80758], [30.28452, 39.80807], [30.28456, 39.80856], [30.28474, 39.80857], [30.28518, 39.80852], [30.28535, 39.8085], [30.28623, 39.80842]]] }, "properties": { "ParselNo": "17", "Alan": "20.182,33", "Mevkii": "Sığır çukuru", "Nitelik": "Tarla", "Ada": "11429", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-16-c-4-b", "Mahalle": "Çukurhisar yeni", "R":"1/2" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };
var parsel9 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.33379, 39.81762], [30.33415, 39.81728], [30.33435, 39.8171], [30.33461, 39.81689], [30.33432, 39.81644], [30.3342, 39.81613], [30.33303, 39.81626], [30.33279, 39.81628], [30.33256, 39.81631], [30.33166, 39.81642], [30.33184, 39.81704], [30.33141, 39.81708], [30.3317, 39.81772], [30.33269, 39.81734], [30.33329, 39.81708], [30.33334, 39.81713], [30.33368, 39.8177], [30.33379, 39.81762]]] }, "properties": { "ParselNo": "62", "Alan": "29.782,92", "Mevkii": "Karayer", "Nitelik": "Tarla", "Ada": "11458", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-17-c-1-c", "Mahalle": "Çukurhisar yeni", "R":"1/12" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } }
var parsel10 = { "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[30.32852, 39.81434], [30.32862, 39.81561], [30.32877, 39.81562], [30.32909, 39.81563], [30.32942, 39.81564], [30.32932, 39.81434], [30.32932, 39.81402], [30.32852, 39.81434]]] }, "properties": { "ParselNo": "111", "Alan": "11.061,45", "Mevkii": "Karayer", "Nitelik": "Tarla", "Ada": "11458", "Il": "Eskişehir", "Ilce": "Tepebaşı", "Pafta": "I24-b-17-c-1-d", "Mahalle": "Çukurhisar yeni", "R":"1/4" } }], "type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "EPSG:4326" } } };

var myStyle = {
    weight: 5,
    fillOpacity: 0.7,
    color: 'red'
}
//parsel1
var p1 = L.geoJson(parsel1, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p1.addTo(harita);

//parsel2
var p2 = L.geoJson(parsel2, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p2.addTo(harita);

//parsel3
var p3 = L.geoJson(parsel3, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p3.addTo(harita);

//parsel4
var p4 = L.geoJson(parsel4, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p4.addTo(harita);

//parsel5
var p5 = L.geoJson(parsel5, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p5.addTo(harita);

//parsel6
var p6 = L.geoJson(parsel6, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p6.addTo(harita);

//parsel7
var p7 = L.geoJson(parsel7, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p7.addTo(harita);

//parsel8
var p8 = L.geoJson(parsel8, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p8.addTo(harita);

//parsel9
var p9 = L.geoJson(parsel9, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p9.addTo(harita);

//parsel10
var p10 = L.geoJson(parsel10, {
    style: myStyle,
    onEachFeature: onEachFeature
});
p10.addTo(harita);

/*Location List*/
var llist = new L.control.locationlist({
    locationsList:
        [
            { title: "11083/192", latlng: [39.83831, 30.35063], zoom: 16 },
            { title: " 11304/454", latlng: [39.84254, 30.3164], zoom: 16 },
            { title: "11324/79", latlng: [39.83294, 30.32234], zoom: 16 },
            { title: "11356/3", latlng: [39.82892, 30.32088], zoom: 16 },
            { title: "11379/10", latlng: [39.83136, 30.28591], zoom: 16 },
            { title: " 11381/445", latlng: [39.82264, 30.31003], zoom: 16 },
            { title: "11429/7", latlng: [39.8091, 30.28905], zoom: 16 },
            { title: "11429/17", latlng: [39.80842, 30.28623], zoom: 16 },
            { title: "11458/62", latlng: [39.81762, 30.33379], zoom: 16 },
            { title: "11458/111", latlng: [39.81434, 30.32852], zoom: 16 },
        ],
    showList: true
});

harita.addControl(llist);
llist.on('next', function () { console.log("Switched to next!"); });
llist.on('prev', function () { console.log("Switched to prev!"); });
/* Layer control*/

var baseMaps = {
    OSM: OpenStreetMap_Tile,
    OSMTopoMap: OpenTopoMap,
    OpenStreetMap_HOT: OpenStreetMap_HOT
};

var overlayMaps = {
    "11083/192": p1,
    "11304/454": p2,
    "11324/79": p3,
    "11356/3": p4,
    "11379/10": p5,
    "11381/445": p6,
    "11429/7": p7,
    "11429/17": p8,
    "11458/62": p9,
    "11458/111": p10,

};

L.control
    .layers(baseMaps, overlayMaps, null, { collapsed: false })
    .addTo(harita);