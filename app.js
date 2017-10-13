const express = require("express");
const app = express();

app.get("/", function(req, res) {
	console.log("This request is working...");
	res.send("Hello World from Node.JS to method get");
});

app.post("/", function(req, res) {
	console.log("This request is working...");
	res.send("Hello World from Node.JS to method post");
});

app.delete("/", function(req, res) {
	console.log("This request is working...");
	res.send("Hello World from Node.JS to method delete");
});

app.put("/", function(req, res) {
	console.log("This request is working...");
	res.send("Hello World from Node.JS to method put");
})

app.listen(3000);