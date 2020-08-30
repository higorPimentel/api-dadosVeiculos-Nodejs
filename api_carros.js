// para executar no node, realizar o npm install
//express
// bodey-parser

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
	
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



app.post('/create', function(req,res){
	
	 fs.readFile('./teste.json', 'utf8', function(err, data){	
	 	
	 let jsonData = JSON.parse(data)
	 let id_reg = jsonData.nextId;	
	 let next_id = parseInt(id_reg)

	
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



	
		 res.send('Cadastro Efetuado com Sucesso')
	 	});

	 
	
})


app.post('/update', function(req,res){

	 fs.readFile('./teste.json', 'utf8', function(err, data){	
	 	
	 let jsonData = JSON.parse(data)
	 let id_reg = parseInt(req.body.cx_id);	
	 let index = jsonData.veiculos.findIndex(veiculos  => veiculos.id === id_reg )

	

	let data_include = {"id":id_reg,
	"marca": req.body.cx_marca,
	"modelo":req.body.cx_modelo,
	"ano":req.body.cx_ano,
	"combustivel":req.body.cx_combustivel,
	"cor":req.body.cx_cor,
	"preco":req.body.cx_preco}

	jsonData.veiculos[index] = data_include

	let info_adicionada = JSON.stringify(jsonData)

		fs.writeFile('./teste.json', info_adicionada, function(){
		})

})

res.send('Cadastro Atualizado com Sucesso')
})





app.post('/delete', function(req,res){

	 fs.readFile('./teste.json', 'utf8', function(err, data){	
	 	
	 let jsonData = JSON.parse(data)
	 let id_reg = parseInt(req.body.cx_id);	
	 let index = jsonData.veiculos.findIndex(veiculos  => veiculos.id === id_reg )

	 		jsonData.veiculos.splice(index,1)

	 			
	 	let info_adicionada = JSON.stringify(jsonData)

		fs.writeFile('./teste.json', info_adicionada, function(){
		})

	 			console.log(jsonData)	


		})

	 res.send('exclusão com Sucesso')

})







app.listen(3000, function(){
	console.log('server incializado')
});



