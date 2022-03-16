const port = 8989,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request, response) => {
        console.log("Received an incoming message");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
    let currentdate = Date();
    let responseMessage = `<h1>Welcome!</h1> ${currentdate}`;
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
    });

app.listen(port);
console.log(`The sever has started and is listening on port number: ${port}`);