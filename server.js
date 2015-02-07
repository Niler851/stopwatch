var express = require("express");
var app = express();


app.use(express.static(__dirname +"/public"));

app.get('/contactlist', function(req, res){
	console.log("GET request");

	person1 ={
		name:"Nils Eriksson",
		email:"nilseriksson89.ne@gmail.com"
	}

	person2 ={
		name:"Mats Lexell",
		email:"matslexell88@gmail.com"
	}

	var contactlist = [person1,person2];


	res.json(contactlist);
});


app.listen(3000);
console.log("server running on port 3000");