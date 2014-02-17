//Part 1 & 2

// var http = require('http');
// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end('<h1>Hello World</h1>');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

//Part 2.5
//Browser return <h1>Hello World</h1> as text because Content-Type in res/writeHead
// is listed as text/plain

//Part 2.9
//Browser return Hello World in HTML h1 because Content-Type is updatd to text/html

//Part 3

var fs = require('fs');

var http = require('http');

http.createServer(function (req, res) {
	var fileContents = fs.readFile('data.txt', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');