// para executar no node, realizar o npm install
//express
// bodey-parser

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
	
const app = express();



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(function(req, res, next){
 res.setHeader("Access-Control-Allow-Origin", "*");
 next();
});




app.get('/read', function(req, res){
	 fs.readFile('./teste.json', 'utf8', function(err, data){
	 		res.send(data)
	 	});
});



app.post('/cadastro', function(req,res){
	//retorno req.body.teste
	//const data = JSON.parse(fs.readFile('dados_veiculos.json'))
	
	

	 fs.readFile('./teste.json', 'utf8', function(err, data){	
	 	
	 let jsonData = JSON.parse(data)
	 let id_reg = jsonData.nextId;	
	 let next_id = parseInt(id_reg)

	console.log(jsonData)


	let data_include = {"id":next_id,
	"marca": req.body.cx_marca,
	"modelo":req.body.cx_modelo,
	"ano":req.body.cx_ano,
	"combustivel":req.body.cx_combustivel,
	"cor":req.body.cx_cor,
	"preco":req.body.cx_preco}

	jsonData.nextId = ++ next_id


	jsonData.veiculos.push(data_include)

		
	let info_adicionada = JSON.stringify(jsonData)

		fs.writeFile('./teste.json', info_adicionada, function(){
		})



		console.log(req.body)
		 res.send('id_reg')
	 	
	 	});

	 



	
})


app.listen(3000, function(){
	console.log('server incializado')
});



