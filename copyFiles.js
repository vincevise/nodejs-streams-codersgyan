const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{

    // downloading big file bad way: this way consumes a lot of memory in the RAM

    // READING TEXT FILE
    // const file = fs.readFileSync('sample.txt')
    // return res.end(file)

    // READING VIDEO FILE
    // const file = fs.readFileSync('badhiya.mp4')
    // res.writeHead(200, {'Content-Type': 'video/mp4'})
    // return res.end(file)


    // Downloading big file in a better way using "streams"

    // READING TEXT FILE
    // const readableStream = fs.createReadStream('sample.txt')
    // readableStream -> writableStream
    // readableStream.pipe(res);

     // READING VIDEO FILE
    const readableStream = fs.createReadStream('badhiya.mp4')
    res.writeHead(200, {'Content-Type':'video/mp4'})
    readableStream.pipe(res);

 
})
const PORT = 5700
server.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))