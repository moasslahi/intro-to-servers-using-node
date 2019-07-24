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