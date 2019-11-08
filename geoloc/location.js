if (navigator.geolocation) {
    
    var geoOptions = { timeout: 10 * 1000, enableHighAccuracy: true }

    navigator.geolocation.getCurrentPosition(success, fail, geoOptions);

    function success(position) {
        console.log('Longitude:' + position.coords.longitude);
        console.log('Latitude:' + position.coords.latitude);
    }

    function fail(msg) {
        console.log(msg.code + msg.message); // Log the error 
    }

}
else {
    console.log("Geolocation not supported")
}