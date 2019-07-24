const http = require('http');

const server = http.createServer((request, response) => {
	console.log('headers',request.headers)
	console.log('methods',request.method)
	console.log('url',request.url)
	const user = {
		name: 'mo',
		hobby: 'footy'
	}

	response.setHeader('content-Type', 'application/json');
	response.end(JSON.stringify(user))
})

server.listen(3000);




// server using express.js

const express = require('express');

const app = express();

app.get('/', (req, res) => {               // if u get this route do this else do the next rout 
	res.send("getting root ");
});

app.get('/profile', (req, res) => {
	res.send("getting profile ");
});

app.delete('/profile', (req, res) => {

	const user = {
		name: 'mo',
		hobby: 'footy'
	}
	
	res.send(user);
});
app.listen(3000)