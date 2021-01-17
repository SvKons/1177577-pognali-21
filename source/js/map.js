ymaps.ready(function () {
  const myMap = new ymaps.Map("map", {
    center: [59.938594, 30.323420],
    zoom: 18
  }, {
    searchControlProvider: "yandex#search",

}),

myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
    hintContent: "",
    balloonContent: "",
    iconContent: ""
});

myMap.geoObjects

.add(myPlacemarkWithContent);

});
