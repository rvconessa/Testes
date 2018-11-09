Sistema de Produtos 
================

Sistemas para cadastro de produtos


#### Ferramentas

**Back-End**

*   Symfony 2.8

**Front-End**

*   Twitter Bootstrap
*   AngularJs

**Banco de Dados**

*   Mysql

#### Preview Online - Heroku

[Preview Online](https://sistema-de-produtos.herokuapp.com)

#### Requerimentos

PHP (5.3.9)

#### Instalação

```sh
$ git clone https://github.com/rvconessa/sistema-de-produtos.git
```
```sh
$ cd sistema-de-produtos
```

```sh
$ composer install
```

```sh
$ php app/console doctrine:database:create
```

```sh
$ php app/console doctrine:schema:create
```
```sh
$ php app/console server:run
```
Acessar [http://localhost:8000](http://localhost:8000)

#### Autor

*   Renan Vichetti Conessa