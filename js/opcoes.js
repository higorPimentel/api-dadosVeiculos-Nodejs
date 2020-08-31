	


	//btn = document.querySelector('#btn_pesquisa')				    
//	btn.addEventListener("click", acessa_api)

let cx_id = document.querySelector('#cx_id')
let cx_marca = document.querySelector('#cx_marca')	
let cx_modelo = document.querySelector('#cx_modelo')	
let cx_ano = document.querySelector('#cx_ano')	
let cx_combustivel = document.querySelector('#cx_combustivel')	
let cx_cor = document.querySelector('#cx_cor')	
let cx_preco = document.querySelector('#cx_preco')	
let info_avisos = document.querySelector('#avisos')	
let cabecalho = document.querySelector('#header-api')
let btn_cancelar = document.querySelector('#btn_cancela')


window.addEventListener('load',start)
cx_id.addEventListener('keyup', retorna_dados)
cabecalho.addEventListener('mouseover', acessa_item_header)
btn_cancelar.addEventListener('click', limpar_campos)

async function start (){
	  tipo_cadastro = 1
	await retornar_id_user ()
}

				

async function retornar_id_user (){

		let resp = await fetch('http://localhost:3000/read');
			let json = await resp.json();
			cx_id.value = json.nextId
			cx_modelo.focus()	
			
	}						



async function limpar_campos() {
cx_preco.value = ''
cx_ano.value = ''
cx_cor.value = ''
cx_modelo.value = ''
await retornar_id_user ()
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




				async function acessa_api (){

					let resp = await fetch('http://localhost:3000/read');
						let json = await resp.json();
						//console.log(json.veiculos[0].modelo)
							
				}			





				let chekced_opcao = document.querySelector('#bloco-opcoes-2')
				chekced_opcao.addEventListener('click',modifica_opcao)

				

				function modifica_opcao(event){

				
					document.querySelector('#opcao-novo').style.color = '#363636'	
					document.querySelector('#opcao-alterar').style.color = '#363636'	
					document.querySelector('#opcao-excluir').style.color = '#363636'	
									


					if (event.srcElement.id.substring(0,5) ==='opcao'){
						document.querySelector('#' + event.srcElement.id).style.color = 'white'

						
							if (event.srcElement.id == 'opcao-novo') {
								tipo_cadastro = 1
								habilita_cxs()
								 cx_id.disabled = true
								 cx_id.focus()
								 info_avisos.style.display = 'none'
								 retornar_id_user ()

							} else if (event.srcElement.id == 'opcao-alterar') {
								tipo_cadastro = 2	
								 cx_id.disabled = false
								 cx_id.value = ''
								 cx_id.focus()
								 habilita_cxs()
								 info_avisos.style.display = 'inline-block'
								
							} else if (event.srcElement.id == 'opcao-excluir') {	
								 tipo_cadastro = 3	
								 desabilta_cxs()
								 cx_id.disabled = false
								 cx_id.value = ''
								 cx_id.focus()
								 info_avisos.style.display = 'inline-block'

					    	}

					}


				}





function desabilta_cxs(){

cx_preco.disabled = true
cx_ano.disabled = true
cx_cor.disabled = true
cx_combustivel.disabled = true
cx_modelo.disabled = true
cx_marca.disabled = true	

}

function habilita_cxs(){

cx_preco.disabled = false
cx_ano.disabled = false
cx_cor.disabled = false
cx_combustivel.disabled = false
cx_modelo.disabled = false
cx_marca.disabled = false	

}



function enviar_form() {


	let form = document.querySelector('#frm_registro')

		if (tipo_cadastro == 1) {

			form.action = "http://localhost:3000/create";
			
		} else if (tipo_cadastro == 2) {

			form.action = "http://localhost:3000/update";
					
		} else if (tipo_cadastro == 3) {

			form.action = "http://localhost:3000/delete";
			
		}
		form.submit()
	
}

async function retorna_dados(event){
	
		if ( event.key == 'Enter' ){
			let resp = await fetch('http://localhost:3000/read');
			let json = await resp.json();
			
			 let index = json.veiculos.findIndex(veiculos  => veiculos.id === parseInt(cx_id.value))

			
				 if (index == -1) {
				 	alert('item digitado não localizado')
				 } else {
				 		cx_marca.value = json.veiculos[index].marca
				 		cx_modelo.value = json.veiculos[index].modelo
				 		cx_ano.value = json.veiculos[index].ano
				 		cx_cor.value = json.veiculos[index].cor
				 		cx_combustivel.value = json.veiculos[index].combustivel
				 		cx_preco.value = json.veiculos[index].preco
				 		
				 }

		}
}