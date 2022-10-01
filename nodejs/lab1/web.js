//khai báo module http để tạo web server
const http = require('http')

//khai báo local server
//const host = 'localhost'  //127.0.0.1
//khai báo server port
//const port = 3000
//tạo server http server
const server = http.createServer((request, respond) => {
    respond.end('Hello World')
})
//chạy server
server.listen(3000)

/*server.listen(port, () => {
    console.log('Server is running at http://' + host + ":" + port)
}) 
*/