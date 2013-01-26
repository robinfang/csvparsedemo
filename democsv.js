var csv = require('csv');
var records=new Array();
var fs=require('fs');
var mongodb = require("mongodb");   

csv()
.from.options({encoding:"utf8"}).from.stream(fs.createReadStream('shengwuyixue.csv'))
.to.options({encoding:"utf8"})
.to.path('shengwu.out')
.on('record', function(data,index){
	

	if(index==0){
		schemas=data;
	}
	else{
		result=new Object();
		for(i=0;i<schemas.length;i++)
		{
			if(data[i]!='')
			result[schemas[i]]=data[i];
		}
		records.push(result);
	}
}).on('end',function(){
mongourl='mongodb://localhost:27017/db;
mongodb.connect(mongourl, function(err, conn){
    conn.collection('shengwu', function(err, coll){
        coll.find();//没写完呢
    });
});

console.log(records[1]);
})
;

