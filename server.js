var express = require('express');
var app = express();
app.use(express.json())

app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://dododo:hehe123@ds029541.mlab.com:29541/comfort';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
  next();
});


app.get('/getClothes',function(req,res){
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("clothes").find({}).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			console.log(result);
			
			res.send(result);
			
		});
			
		db.close();
	});
})

app.get('/getPostures',function(req,res){
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("clothes").find({}).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			console.log(result);
			
			res.send(result);
			
		});
			
		db.close();
	});
})


app.post('/addCloth',function(req,response){
	
	let cloth = req.body
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("clothes").insertMany([cloth], function(err, res) {
			
			if (err) throw err;
			console.log("文档插入成功");

			response.send('OK');
		
		});
			
		db.close();
	});
})

app.post('/addPosture',function(req,response){
	
	let posture = req.body
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("postures").insertMany([posture], function(err, res) {
			
			if (err) throw err;
			console.log("文档插入成功");

			response.send('OK');
		
		});
			
		db.close();
	});
})

app.get('/',function(req,res){
	
	res.sendFile('public/index.html', { root : __dirname});
})

app.listen(3000,function(){
	
	/*MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    console.log('数据库已创建');
		
	    var dbase = db.db("comfort");
		
		dbase.collection("clothes").insertMany([{'name': '丝袜-100d', 'warm':0.1}], function(err, res) {
			
			if (err) throw err;
			console.log("文档插入成功");
			db.close();
		});
			
		db.close();
	});*/
	
	console.log('running on port 3000...')
})
