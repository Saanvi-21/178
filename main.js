let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = "pk.eyJ1Ijoid2F0ZXJtZWxvbi1zb3JiZXQiLCJhIjoiY2t3eGVqdmF0MGRhbjJvcDhqbGNneTBwbyJ9.SGOuZVohBLLNdi2stpy79g"

var map = new mapboxgl.Map({
    container : "map",
    style : "mapbox://styles/mapbox/streets-v11",
    center : [longitude, latitude],
    zoom : 16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions : {
            enableHighAccuracy : true
        },
        trackUserLocation : true
    })
)