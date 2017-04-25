var http = require("https");
setInterval(function() {
    http.get("https://cryptic-meadow-22014.herokuapp.com/");
}, 300000);