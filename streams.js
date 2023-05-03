const {Readable, Writable} = require('stream')

const readableStream = new Readable({
    objectMode:true, // this allows objects to be passed in the stream
    highWaterMark: 6,// this is threshold limit for the buffer by default it is 16KB, when objectMode is true the value of the highWaterMark becomes the no of objects
    read(){}
});





// const writableStream = new Writable({
//     write(s){
//         console.log('writting: ',s.toString())
//     }
// })


readableStream.on('data',(chunk)=>{
    // console.log('Data comming: ', chunk.toString())
    writableStream.write(chunk)
})

 
console.log(readableStream.push('hello from Coders Gyan'))


// TRANSFORM STREAM

