# MBLabs Events

Projeto para vaga de desenvolvedor na empresa MBLabs.
API para gestão de eventos.

# Objetivos

1. Banco de dados em postgres
2. Camada de conexão com o banco
3. Camada de APIs com:
  * API para autenticação (padrão a sua escolha)
  * API para obter a lista de eventos
  * API para obter o detalhe do evento
  * API para realizar o join no evento
  * API para realizar o remove do evento

# Requisitos
ES6, Async/Await, Sequelize, Express e Infra no Google Cloud

### Instalação

Configurar o arquivo.

**"config/database.js"**

**Clonar repositório.**

```sh
$ cd mblabs-events
$ node_modules/.bin/sequelize db:migrate
$ node_modules/.bin/sequelize db:seed:all
$ npm install
$ npm run babel
```

**Executar Testes**

```sh
$ cd mblabs-events
$ npm install
$ npm run test
```

### Aplicação exemplo 
[MBLabs Events](https://mblabs-events.appspot.com) 

### Documentação online 
[MBLabs Events Docs](https://mblabs-events.appspot.com/events-api-docs/#/) 

### Travis
Repositório contém um arquivo configurado para usar o Travis CI.

### Google Cloud
Arquivo  **app.yaml** para utilizar google cloud para deploy.
