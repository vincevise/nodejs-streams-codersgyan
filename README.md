# Nodejs-streams-codersgyan

youtube link : https://www.youtube.com/watch?v=ZPwgbvCkRpY&t=25s&pp=ygUTY29kZXJzIGd5YW4gc3RyZWFtcw%3D%3D

Node.js streams are a powerful and flexible way to transfer data between different sources and destinations, such as files, network sockets, and other streams. By using streams, we can process large amounts of data efficiently without consuming excessive memory or CPU resources.

- Nodejs server uses streams, when you make a node js server, you have a request and response object, these objects are streams,
- TCP sockets are streams
- Read write operation file system uses streams
- Nodejs streams are used very extensively

> **Why should we use streams? what is advantages of stream**
> 

> Streams are used for transferring data, whenever you have a big file you can process the files into small chunks, reading a big file at once creates numerous problems,
> 

## Problems of reading big Files:

- **Memory** : When we read a big file, such as a large text file or a large database file, we need to load it into memory to be able to process it. However, loading a large file into memory can be a problem because it can consume a lot of memory resources, especially if we have limited memory capacity. with the help of streams we can save memory in a very effective and efficiently manner.
- **Processing time** : Reading a large file can be time-consuming, and this can become a problem if we need to process the file quickly.
- **Disk I/O**: When we read a large file, we need to read it from disk. Disk I/O can be slow compared to processing data in memory, especially if we're using a hard disk drive (HDD) instead of a solid-state drive (SSD). This can result in longer processing times, which can be a problem if we need to process the file quickly.
- **File format**: The format of the file can also impact how easy it is to read and process. For example, some file formats may be compressed, encrypted, or in a binary format, which can make them more difficult to read and process. Additionally, some file formats may be proprietary or not well-documented, which can make it challenging to write software that can read and process the file.
- **Data Integrity**: Reading a large file can also introduce issues with data integrity. For example, if we're processing a large text file and we encounter a corrupt or malformed line, this can cause errors in our processing. Similarly, if we're processing a large database file and we encounter corrupted or inconsistent data, this can cause issues with our analysis.

![Screenshot (317)](https://user-images.githubusercontent.com/88813613/235917073-ca134ad8-61c5-419b-924e-17626d21daed.png)
picture courtesy: <a href="">coder's gyan</a>

## **Process of Streaming**

When a stream is created in Node.js, it is represented as an instance of the **`Readable`**, **`Writable`**, or **`Duplex`** class. Streams can be created using built-in Node.js modules such as **`fs`**, **`http`**, **`net`**, and **`child_process`**, or by implementing custom stream classes.

When data is read from a stream, Node.js reads a chunk of data from the stream's source and stores it in a buffer in RAM. The size of each chunk is determined by the **`highWaterMark`** option, which is set when the stream is created. The default value of **`highWaterMark`** is 16 KB for readable streams and 16 KB for writable streams, but it can be customized to suit the specific needs of the application.

When data is written to a writable stream, Node.js buffers the data in RAM until it reaches the **`highWaterMark`** limit or until the **`end()`** method is called to signal the end of the data stream. Node.js then flushes the buffered data to the stream's destination, such as a file or a network socket

## Applications
- Node.js streams are used extensively in many types of applications, including web servers, file systems, and command-line tools. For example, when you make a Node.js server, you have a request and response object, which are both streams. TCP sockets are also streams, which means that they can be easily integrated into Node.js applications.
- Node.js streams are also used for logging purposes. Most applications save log files to track various events and errors that occur during runtime. By using streams, we can efficiently write log data to a file or database, without consuming excessive memory or CPU resources.
- It's worth noting that console.log() in Node.js also uses streams internally. When you use console.log() to print data to the console, Node.js writes the data to a writable stream, which is then displayed in the console
