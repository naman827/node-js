const http = require("http");
const fs = require("fs");
const { Transform } = require("stream");

const server = http.createServer((req, res) => {
  // Defining the streams and transform first
  const samplefilestream = fs.createReadStream("sample.txt");
  const outputwritablestream = fs.createWriteStream("output.txt");

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const modifiedWord = chunk
        .toString()
        .toUpperCase()
        .replaceAll(/ipsum/gi, "Hello"); // Correct regex
      callback(null, modifiedWord);
    },
  });

  // Processing the stream
  samplefilestream.pipe(transformStream).pipe(outputwritablestream);

  res.end(); // End the response
});

server.listen(8080, () => {
  console.log("Server is started");
});
