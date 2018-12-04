// index.js
const http =require('http')
const port=3000

const requestHandler=(request, Response) => {
    console.log(request.url)
    Response.end('Hello node.js Server!')
} 

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err){
    return console.log('something bad happend', err)
}
console.log('server is listening on', port)
})

require('./app/index')
const _ = require('lodash')
_.assign({'a': 1}, {'b': 2}, {'c': 3});
//{ 'a': 1, 'b': 2, 'c': 3 }
