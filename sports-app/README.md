# Projeto Venturus

### Tecnologias

* HTML5
* CSS3

### Pré processador
* SASS

### JavaScript Framework
* React

### Pacotes Adicionais
* Chai
* SweetAlert
* StoryBook
* GitHub Pages

### Rodando Aplicação

```
git clone https://github.com/rvconessa/sports-app.git

```

```
cd sports-app/

```

```
npm install

```

```
npm start

```

### Aplicação online.

[https://rvconessa.github.io/sports-app/](https://rvconessa.github.io/sports-app/)

### Funções

1. Breadcrumb
	* Quando o total de itens for superior a três, os itens entre dois e o último vão receber três pontos '...'.
	* Criado teste de storyboard e integração no arquivo breadcrumb.


```
npm run test

```

```
npm start storybook

```
```
http://localhost:9009

```


2. Table
    * Dados dos usuários são retornados do endpoint https://jsonplaceholder.typicode.com/users, e concatenados com os valores totais de posts, albums e photos.
    * Link no e-mail para envio, quando clicar no link de e-mail vai abrir uma janela para envio de e-mail.
    * Coordenadas definidas na coluna de cidade, clicando no link será exibido o google maps com as coordenadas.
    * Passando o mouse sobre as linhas da tabela é exibida a opção de excluir o registro.
3. Filtro
	* Filtro de usuário usando o state da aplicação.

4. Registro
	* Adiciona um novo usuário no state da aplicação.
	* Quando o formulário não é válido um alerta será exibido com os erros, se tudo ocorrer corretamente um alerta de sucesso será exibido.
	* Não adiciona coordenadas no registro do usuário.	
