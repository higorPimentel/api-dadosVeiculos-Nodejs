


let cabecalho = document.querySelector('#header-api')
window.addEventListener('load',start)
cabecalho.addEventListener('mouseover', acessa_item_header)




async function start (){
	
	await retorna_registros ()
}

				

async function retorna_registros (){

		    let resp = await fetch('http://localhost:3000/read');
			let json = await resp.json();			
			let qtd_itns = json.veiculos.length
			let table =  document.querySelector('#relatorio')	
			let qt_reg = 0
				
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
				
				qt_reg += 1

			}
			
			itm += '<tr>'
			itm += `<th>Qtd. Registros:  ${qt_reg}</th>`
			itm +='</tr>'


			 table.innerHTML = itm
			
	}	



async function acessa_item_header(event){
 document.querySelector('#opc_cadastro').style.border = 'none'
 document.querySelector('#opc_relatorio').style.border = 'none'
 document.querySelector('#opc_ajuda').style.border = 'none'
 document.querySelector('#lb_h1').style.textShadow = 'none'

	if (event.srcElement.id.substring(0,3) == 'opc') {
		document.querySelector('#' + event.srcElement.id).style.border = 'solid 1px #40E0D0'
		document.querySelector('#' + event.srcElement.id).style.borderRadius = '10px'
		
	}

	if (event.srcElement.id.substring(0,2) == 'lb') {
	document.querySelector('#' + event.srcElement.id).style.textShadow = '1px 1px 8px #40E0D0'
			
	}


}
