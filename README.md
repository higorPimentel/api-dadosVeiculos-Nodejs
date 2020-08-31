API dados veículos, trata-se de uma APi de cadastro de veículos  que armazena os dados (Marca, Modelo, Ano, Combustível, Cor e Preço), utilizando o ambiente NODE-js e o framework Express.

----------------------------------
# Ambiente de execução

Antes de inicializar é necessário baixar o pacote express, o framework é utilizado na execução da API :

1.Utilizando o terminal (CMD),  Acesse a pasta onde os arquivos do programa foram baixado, e execute a instalação do pacote express. ' _npm install express_', conform imagem Abaixo

![ft1](https://user-images.githubusercontent.com/49642934/91680931-460f1e00-eb23-11ea-8c4f-6d76e4d252a5.JPG)



2.Após a instalação incie o servidor, com a execução do arquivo principal **api_carros.js**. Com isso o servidor será iniciado utilizando a porta 3000. (localhost:3000/), e será retornado no próprio console a mensagem _server inicializado.

![ft2](https://user-images.githubusercontent.com/49642934/91680951-54f5d080-eb23-11ea-81ca-ad62e7915736.JPG)


----------------------------------
# Acessando as Funcionalidades

A API dados veículos armazena as informações no arquivo _dados_veiculos.json_, para realizar as operações (CRIAR,LER, ALTERAR, EXCLUIR) é utilizado dois arquivos na pasta.

1. index.html - Pagina inicial da aplicação, conténdo as opções de Cadastro, alteração e exclusão). Após executar uma opção, a pagina é redirecionada ao servidor.
Clique em voltar e atualize a pagina para realizar mais operações 
