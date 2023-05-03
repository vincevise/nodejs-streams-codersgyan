const {Transform} = require('stream')


const replaceWordProcessing = new Transform({
    transform(chunk, encoding, callback){
        // replaceWordProcessing.emit('error', new Error('something went wrong'))
        const finalString = chunk.toString().replaceAll(/ipsum/gi,'cool')
        console.log(finalString)
        callback(null, finalString)
    }
})

module.exports = replaceWordProcessing