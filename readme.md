# Teste de encriptar e desencriptar

<p style="font-size: 15px">Execute o comando a seguir no terminal </p>

* docker-compose up --build 
    * Se for a primeira vez se você executa, pra instalar as depedencias
    
* docker-compose up 
    * Se for executar e ter dados no terminal
    * e encerrar a execução com crtl+c
    
* docker-compose up -d
    * Se for executar e ter nada no twerminal
    * e encerrar a docker-compose down

## Rotas
    
> Post: "/encrypted" 

```
{
    "text":"exemple text"
}

```
### Dentro tem ter um text para que a rota reconheça qual vai ser o texto que vai ser encriptado

> Get: '/dencrypted/:id'

### No lugar do id tem colocar um id existente do banco de dados

## Stacks:

*    Docker;
 *   Nodejs;
*    Express;
*    Sequelize;
 *   Postgres;
