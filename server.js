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

var clonames = [{
	name: '内衣类--内裤(男)',
	clo: 0.04
},{
	name: '内衣类--内裤(女)',
	clo: 0.03
}, {
	name: '内衣类--胸罩',
	clo: 0.01
}, {
	name: '内衣类--T恤',
	clo: 0.08
}, {
	name: '内衣类--长衬裙',
	clo: 0.16
}, {
	name: '内衣类--短衬裙',
	clo: 0.14
}, {
	name: '内衣类--秋衣',
	clo: 0.2
}, {
	name: '内衣类--秋裤',
	clo: 0.15
}, {
	name: '鞋袜类--踝袜(短袜)',
	clo: 0.02
}, {
	name: '鞋袜类--小腿袜(中袜)',
	clo: 0.03
}, {
	name: '鞋袜类--厚膝袜(厚长袜)',
	clo: 0.06
}, {
	name: '鞋袜类--丝袜裤(女)',
	clo: 0.02
}, {
	name: '鞋袜类--人字拖',
	clo: 0.02
}, {
	name: '鞋袜类--普通拖鞋',
	clo: 0.03
}, {
	name: '鞋袜类--皮靴',
	clo: 0.1
}, {
	name: '衬衣类--无袖圆领衬衫(女)',
	clo: 0.12
}, {
	name: '衬衣类--短袖衬衫(正装)',
	clo: 0.19
}, {
	name: '衬衣类--长袖衬衫(正装)',
	clo: 0.25
}, {
	name: '衬衣类--长袖绒衫',
	clo: 0.34
}, {
	name: '衬衣类--短袖针织衫',
	clo: 0.17
}, {
	name: '衬衣类--长袖运动衫',
	clo: 0.34
}, {
	name: '裤子类--短裤',
	clo: 0.06
}, {
	name: '裤子类--休闲短裤',
	clo: 0.08
}, {
	name: '裤子类--直筒长裤(薄)',
	clo: 0.15
}, {
	name: '裤子类--直筒长裤(厚)',
	clo: 0.24
}, {
	name: '裤子类--运动裤',
	clo: 0.28
}, {
	name: '裤子类--挂肩工装裤',
	clo: 0.30
}, {
	name: '裤子类--连衣工装裤',
	clo: 0.49
}, {
	name: '西服类--单排扣上衣(薄)',
	clo: 0.36
}, {
	name: '西服类--单排扣上衣(厚)',
	clo: 0.44
}, {
	name: '西服类--双排扣上衣(薄)',
	clo: 0.42
}, {
	name: '西服类--双排扣上衣(厚)',
	clo: 0.48
}, {
	name: '西服类--马甲/背心(薄)',
	clo: 0.1
}, {
	name: '西服类--马甲/背心(厚)',
	clo: 0.17
}, {
	name: '毛衣类--马甲/背心(薄)',
	clo: 0.13
}, {
	name: '毛衣类--马甲/背心(厚)',
	clo: 0.22
}, {
	name: '毛衣类--长袖毛衣(薄)',
	clo: 0.25
}, {
	name: '毛衣类--长袖毛衣(厚)',
	clo: 0.36
}, {
	name: '裙子类--长裙(薄)',
	clo: 0.14
}, {
	name: '裙子类--长裙(厚)',
	clo: 0.23
}, {
	name: '裙子类--长袖连衣裙(薄)',
	clo: 0.33
}, {
	name: '裙子类--长袖连衣裙(厚)',
	clo: 0.47
}, {
	name: '裙子类--短袖连衣裙(薄)',
	clo: 0.29
}, {
	name: '裙子类--无袖圆连衣裙(薄)',
	clo: 0.23
}, {
	name: '裙子类--无袖圆连衣裙(厚)',
	clo: 0.27
}, {
	name: '睡衣类--无袖短睡裙(薄,女)',
	clo: 0.18
}, {
	name: '睡衣类--无袖长睡裙(薄,女)',
	clo: 0.2
}, {
	name: '睡衣类--短袖长睡裙(薄,女)',
	clo: 0.31
}, {
	name: '睡衣类--长袖长睡裙(厚,女)',
	clo: 0.46
}, {
	name: '睡衣类--长袖睡衣(厚)',
	clo: 0.57
}, {
	name: '睡衣类--短袖睡衣(薄)',
	clo: 0.42
}, {
	name: '睡衣类--长袖长袍(厚)',
	clo: 0.69
}, {
	name: '睡衣类--长袖短袍(厚)',
	clo: 0.48
}, {
	name: '睡衣类--短袖短袍(薄)',
	clo: 0.34
}, {
	name: '坐椅类--金属椅',
	clo: 0.00
}, {
	name: '坐椅类--木板凳',
	clo: 0.01
}, {
	name: '坐椅类--普通办公椅',
	clo: 0.10
}, {
	name: '坐椅类--沙发椅',
	clo: 0.15
}];

var actData = [{
	name: '放松站立: 1.2',
	met: 1.2
}, {
	name: '静坐: 1.0',
	met: 1.0
}, {
	name: '睡觉: 0.7',
	met: 0.7
}, {
	name: '倚靠: 0.8',
	met: 0.8
}, {
	name: '散步(3.2km/h): 2.0',
	met: 2.0
}, {
	name: '散步(4.8km/h): 2.6',
	met: 2.6
}, {
	name: '散步(6.4km/h): 3.8',
	met: 3.8
}, {
	name: '坐着阅读: 1.0',
	met: 1.0
}, {
	name: '坐着写字: 1.0',
	met: 1.0
}, {
	name: '坐着打字: 1.1',
	met: 1.1
}, {
	name: '坐着整理文件: 1.2',
	met: 1.2
}, {
	name: '站着整理文件: 1.4',
	met: 1.4
}, {
	name: '闲逛: 1.7',
	met: 1.7
}, {
	name: '提东西/打包东西: 2.1',
	met: 2.1
}, {
	name: '开轿车: 1.5',
	met: 1.5
}, {
	name: '开民航飞机: 1.2',
	met: 1.2
}, {
	name: '开战斗机: 2.4',
	met: 2.4
}, {
	name: '开大型汽车: 3.2',
	met: 3.2
}, {
	name: '做饭: 1.8',
	met: 1.8
}, {
	name: '打扫卫生: 2.7',
	met: 2.7
}, {
	name: '坐着做重型肢体运动: 2.2',
	met: 2.2
}, {
	name: '锯工: 1.8',
	met: 1.8
}, {
	name: '轻型器械工作: 2.2',
	met: 2.2
}, {
	name: '重型器械工作: 4.0',
	met: 4.0
}, {
	name: '举起45kg的物体: 4.0',
	met: 4.0
}, {
	name: '体力挖掘工作: 4.4',
	met: 4.4
}, {
	name: '跳舞: 3.4',
	met: 3.4
}, {
	name: '做健美操/体操: 3.5',
	met: 3.5
}, {
	name: '打网球: 3.8',
	met: 3.8
}, {
	name: '打篮球: 6.3',
	met: 6.3
}, {
	name: '摔跤: 7.8',
	met: 7.8
}];


app.get('/getClothes',function(req,res){
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("clothes").find({}).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
			res.send(result);
			
		});
			
		db.close();
	});
})

app.get('/getPostures',function(req,res){
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("postures").find({}).toArray(function(err, result) { // 返回集合中所有数据
			if (err) throw err;
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


app.post('/addResult',function(req,response){
	
	let result = req.body
	
	MongoClient.connect(url, { }, function (err, db) {
	    if (err) throw err;
		
	    var dbase = db.db("comfort");
		
		dbase.collection("results").insertMany([result], function(err, res) {
			
			if (err) throw err;

			response.send('OK');
		
		});
			
		db.close();
	});
})

app.get('/',function(req,res){
	
	res.sendFile('public/index.html', { root : __dirname});
})

app.listen(3000,function(){

	// MongoClient.connect(url, { }, function (err, db) {
	//     if (err) throw err;
		
	//     var dbase = db.db("comfort");
		
	// 	dbase.collection("clothes").insertMany(clonames, function(err, res) {
			
	// 		if (err) throw err;
	// 		console.log("初始化服装热阻成功");

	// 	});
			
	// 	db.close();
	// });

	// MongoClient.connect(url, { }, function (err, db) {
	//     if (err) throw err;
		
	//     var dbase = db.db("comfort");
		
	// 	dbase.collection("postures").insertMany(actData, function(err, res) {
			
	// 		if (err) throw err;
	// 		console.log("初始化姿态成功");

	// 	});
			
	// 	db.close();
	// });
	
	console.log('running on port 3000...')
})
