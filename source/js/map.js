ymaps.ready(function () {
  const myMap = new ymaps.Map("map", {
    center: [59.938239, 30.323872],
    zoom: 16
  }, {
    searchControlProvider: "yandex#search",

}),

MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
),

myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
    hintContent: "",
    balloonContent: "",
    iconContent: ""
}, {

    iconLayout: "default#image",
    iconImageHref: "img/map-marker.svg",
    iconImageSize: [41, 41],
    iconImageOffset: [0, 0],

    iconContentLayout: MyIconContentLayout
});

myMap.geoObjects

.add(myPlacemarkWithContent);

myMap.behaviors.disable("scrollZoom");
});
