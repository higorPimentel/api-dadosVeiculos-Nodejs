



window.addEventListener('load',start)

async function start (){
	
	await retorna_registros ()
}

				

async function retorna_registros (){

		    let resp = await fetch('http://localhost:3000/read');
			let json = await resp.json();			
			let qtd_itns = json.veiculos.length
			let table =  document.querySelector('#relatorio')	

				
						itm = ''
						itm += '<tr>'
						itm += '<th>ID</th>'
						itm += '<th>Marca</th>'
					    itm += '<th>Modelo</th>'
						itm += '<th>Ano</th>'
						itm += '<th>Combustivel</th>'
						itm += '<th>Cor</th>'
						itm += '<th>Preço</th>'
						itm += '</tr>'

			for (var i = 0; i < qtd_itns; i++) {
					

				itm +='<tr>'
				itm +=`<td>${json.veiculos[i].id}</td>`
				itm +=`<td>${json.veiculos[i].marca}</td>`
				itm +=`<td>${json.veiculos[i].modelo}</td>`
				itm +=`<td>${json.veiculos[i].ano}</td>`
				itm +=`<td>${json.veiculos[i].combustivel}</td>`
				itm +=`<td>${json.veiculos[i].cor}</td>`
				itm +=`<td>${json.veiculos[i].preco}</td>`
				itm +=`</tr>`
				
			}
			 table.innerHTML = itm
			
	}	