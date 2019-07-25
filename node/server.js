// const http = require('http');

// const server = http.createServer((request, response) => {
// 	console.log('headers',request.headers)
// 	console.log('methods',request.method)
// 	console.log('url',request.url)
// 	const user = {
// 		name: 'mo',
// 		hobby: 'footy'
// 	}

// 	response.setHeader('content-Type', 'application/json');
// 	response.end(JSON.stringify(user))
// })

// server.listen(3000);



// simple express server 

const express = require('express');

const app = express();

app.use((req,res, next) => {
	console.log('<h1>hello</h1>')
	next();
})  // middleware recieves ahead of time and modifies it and then passes it to the next() parameter


app.get('/', (req,res) => {
	res.send('test')
})

app.listen(3000);













// // server using express.js

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {               // if u get this route do this else do the next rout 
// 	res.send("getting root ");
// });

// app.get('/profile', (req, res) => {
// 	res.send("getting profile ");
// });

// app.delete('/profile', (req, res) => {

// 	const user = {
// 		name: 'mo',
// 		hobby: 'footy'
// 	}
	
// 	res.send(user);
// });
// app.listen(3000)