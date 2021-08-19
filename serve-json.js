var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer(function (req, res) {
    //change the MIME type to 'application/json'
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    });
    //Create a JSON
    let json_response = [{
        "date": "2020-01-01",
        "localName": "New Year's Day",
        "name": "New Year's Day",
        "countryCode": "US",
        "fixed": false,
        "global": true,
        "launchYear": 2020,
        "type": "Public"
    }];
    console.log('Server Running');
    res.end(JSON.stringify(json_response));
}).listen(3000);
