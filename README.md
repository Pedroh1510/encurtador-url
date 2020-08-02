# Encurtador de Url

Projeto proposto pode ser encontrado [aqui](https://github.com/backend-br/desafios/tree/master/1%20-%20Easy/Encurtador%20de%20URL).

Recebe como parâmetro uma URL através de uma requisição POST e retorna uma nova URL com um prazo de validade que ao ser acessada redireciona para a URL cadastrada

Padrões da nova URL:

- Mínimo de 5 e máximo de 10 caracteres.
- Apenas letra e números.

## Requisitos

- [Node.js, necessário para execução do projeto](https://nodejs.org/en/)
- [Yarn, para gerenciar pacotes de instalação](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)
- [Docker, para rodar a aplicação em um container](https://docs.docker.com/compose/install/)(opcional)
OBS: o docker pode ser substituído um bando de dados rodando localmente.

## Executando

Clonando Repositório

```sh
git clone https://github.com/Pedroh1510/encurtador-url.git
cd encurtador-url
yarn
```

Utilizando o docker para criar um banco de dados local (OPCIONAL)

```sh
yarn up
```

Start, aplicação ira rodar na rota http://localhost:3333/

```sh
yarn start
```

OBS: dentro da pasta request, há um exemplo de requisição POST para gerar uma nova URL. Se estiver usando o VSConde recomendo a extensão REST Client para ja utilizar o arquivo testar a aplicação

## Autor

- GitHub: [Pedroh1510](https://github.com/Pedroh1510)
- LinkedIn: [Pedroh1510](www.linkedin.com/in/pedroh1510)
