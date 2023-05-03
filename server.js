const http = require('http')
const fs = require('fs')
const { Transform, pipeline } = require('stream')
const replaceWordProcessing = require('./replacewordProcessor')
const uppercaseWordProcessing = require('./uppercaseWordProcessing')
const server = http.createServer((req, res)=>{

    // /////////////////////////////////////////////////////////////////////////
    // Downloading big file bad way: this way consumes a lot of memory in the RAM

    // READING TEXT FILE
    // const file = fs.readFileSync('sample.txt')
    // return res.end(file)

    // READING VIDEO FILE
    // const file = fs.readFileSync('badhiya.mp4')
    // res.writeHead(200, {'Content-Type': 'video/mp4'})
    // return res.end(file)




    // /////////////////////////////////////////////////////////////////////////
    // Downloading big file in a better way using "streams"

    // READING TEXT FILE
    // const readableStream = fs.createReadStream('sample.txt')
    // readableStream -> writableStream
    // readableStream.pipe(res);

    // READING VIDEO FILE
    // const readableStream = fs.createReadStream('badhiya.mp4')
    // res.writeHead(200, {'Content-Type':'video/mp4'})
    // readableStream.pipe(res);




    // /////////////////////////////////////////////////////////////////////////
    // Copy big file using bad way

    // const file = fs.readFileSync('sample.txt')
    // fs.writeFileSync('output.txt', file)
    // res.end()


    // Copy file in a good way
    // const readStream = fs.createReadStream('sample.txt');
    // const writeStream = fs.createWriteStream('output2.txt');

    // readStream.on('data', (chunk)=>{
    //     console.log(chunk.toString(), 'chunk')
    //     writeStream.write(chunk)
    // })

    
  

    // /////////////////////////////////////////////////////////////////////////
    // String processing
    // const sampleFileStream = fs.createReadStream('sample.txt')
    // const outputWritableStream = fs.createWriteStream('transform2.txt')

    // // sampleFileStream
    // //     .pipe(replaceWordProcessing)
    // //     .pipe(uppercaseWordProcessing)
    // //     .pipe(outputWritableStream)

    // pipeline(
    //     sampleFileStream, 
    //     replaceWordProcessing,
    //     uppercaseWordProcessing,  
    //     outputWritableStream, 
    //     (err)=>{
    //         console.log(err)
    //     }
    // )

    //   sampleFileStream.on('data', (chunk)=>{
    //     console.log('data rceived: ', chunk.toString())
    //     // Process
    //     const upperCaseString = chunk.toString().toUpperCase()
    //     const finalString = upperCaseString.replaceAll(/ipsum/gi,'cool')
    //     // Writable stream write
    //     outputWritableStream.write(finalString)
    // })
    res.end()
 
})
const PORT = 5700
server.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))