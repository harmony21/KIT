var map;

DG.then(function () {
    map = DG.map('map', {
        center: [48.49, 135.10],
        zoom: 15,
        scrollWheelZoom: false
    });

    var myIcon = DG.icon({
        iconUrl: 'assets/images/map-icon.png',
        iconSize: [45, 45],
        iconAnchor: [0, 0],
        popupAnchor: [0, 76],
    });

    marker = DG.marker([48.49, 135.09], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><h6>Выполненные объекты</h2><div class="popup__wrapper"><div class="popup__left"><img src="assets/images/object1.png \"></div><div class="popup__right"><div class="objects__desc"><h2 class="objects__title">Заголовок объекта</h2><div class="objects__details"><div class="objects__square"><img src="assets/images/square-black.png" alt=""><span>160 кв. м.</span></div><div class="objects__height"><img src="assets/images/height-black.png" alt=""><span>2 этажа</span></div></div></div></div></div><a class="objects__link" href="">Подробнее о проекте</a></div>')
    marker.bindPopup(popup).openPopup();

    marker = DG.marker([48.4940, 135.10], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><h6>Выполненные объекты</h2><div class="popup__wrapper"><div class="popup__left"><img src="assets/images/object2.png \"></div><div class="popup__right"><div class="objects__desc"><h2 class="objects__title">Заголовок объекта</h2><div class="objects__details"><div class="objects__square"><img src="assets/images/square-black.png" alt=""><span>160 кв. м.</span></div><div class="objects__height"><img src="assets/images/height-black.png" alt=""><span>2 этажа</span></div></div></div></div></div><a class="objects__link" href="">Подробнее о проекте</a></div>')
    marker.bindPopup(popup).openPopup();

    marker = DG.marker([48.4880, 135.08], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><h6>Выполненные объекты</h2><div class="popup__wrapper"><div class="popup__left"><img src="assets/images/object3.png \"></div><div class="popup__right"><div class="objects__desc"><h2 class="objects__title">Заголовок объекта</h2><div class="objects__details"><div class="objects__square"><img src="assets/images/square-black.png" alt=""><span>160 кв. м.</span></div><div class="objects__height"><img src="assets/images/height-black.png" alt=""><span>2 этажа</span></div></div></div></div></div><a class="objects__link" href="">Подробнее о проекте</a></div>')
    marker.bindPopup(popup).openPopup();

    marker = DG.marker([48.4920, 135.11], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><h6>Выполненные объекты</h2><div class="popup__wrapper"><div class="popup__left"><img src="assets/images/object4.png \"></div><div class="popup__right"><div class="objects__desc"><h2 class="objects__title">Заголовок объекта</h2><div class="objects__details"><div class="objects__square"><img src="assets/images/square-black.png" alt=""><span>160 кв. м.</span></div><div class="objects__height"><img src="assets/images/height-black.png" alt=""><span>2 этажа</span></div></div></div></div></div><a class="objects__link" href="">Подробнее о проекте</a></div>')
    marker.bindPopup(popup).openPopup();
});