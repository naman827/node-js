// const http = require("http");
// const fs = require("fs");
// const { Transform } = require("stream");

// const server = http.createServer((req, res) => {
//   //? downloading files in a bad way❌
//   // const file = fs.readFileSync('sample.txt')
//   // return res.end(file);
//   //@ downloading file in a good way✅
//   //   const readableStream = fs.createReadStream("sample.txt");
//   //   readableStream.pipe(res);
//   //? copying files in bad way❌
//   //   const file = fs.readFileSync('sample.txt');
//   //   fs.writeFileSync('output.txt', file);
//   //   res.end()
//   //@ copying files in a good way✅
//   // const readStream = fs.createReadStream('sample.txt');
//   // const writeStream = fs.createWriteStream('output.txt');
//   // readStream.on('data', (chunk) => {
//   //     console.log('Chunk: ', chunk);
//   //     writeStream.write(chunk);
//   // });
//   //! string processing
//   // Uppercase()
//   // ipsum word naman
//   //? Bad way to tranforming chunks❌
//   samplefilestream.pipe(transformStream).pipe(outputwritablestream);
//   // samplefilestream.on("data", (chunk) => {
//   //   const modifiedWord = chunk
//   //     .toString()
//   //     .toUpperCase()
//   //     .replaceAll(/ipsum/gi, "Naman");
//   //   outputwritablestream.write(modifiedWord);
//   // });

//   //@ good approach ✅

//   // Uppercase()
//   // ipsum word replace to another word
//     const samplefilestream = fs.createReadStream("sample.txt");
//     const outputwritablestream = fs.createWriteStream("output.txt");

//     const transformStream = new Transform({
//       transform(chunk, encoding, callback) {
//         const modifiedWord = chunk
//           .toString()
//           .toUpperCase()
//           .replaceAll(ipsum / gi, "Hello");
//         callback(null, modifiedWord);
//       },
//     });


//   // !Bad way to tranforming chunks
//   // samplefilestream.on("data" , (chunk)=>{
//   //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(ipsum/gi , "Hello")
//   //     outputwritablestream.write(modifiedWord)
//   // })

//   samplefilestream.pipe(transformStream).pipe(outputwritablestream);

//   res.end();
// });

// server.listen(8080, () => {
//   console.log("Server is started");
// });
