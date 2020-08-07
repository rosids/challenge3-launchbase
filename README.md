<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-desafio-3-1">Desafio 3-1</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-desafio-3-2">Desafio 3-2</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-desafio-3-3">Desafio 3-3</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-como-baixar-o-projeto">Como Baixar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</h3>

## :information_source: Sobre

Praticar os assuntos abordados no módulo 3 do bootcamp.

## :link: Desafio 3-1

Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de Cursos e Sobre). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.

- `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.
- `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.
- `layout.njk`: Arquivo referente à base comum entre as páginas.
- `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:

  - Layout.njk como base
  - Ter um texto infortivo sobre o erro

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.

## :link: Desafio 3-2

Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.

## :link: Desafio 3-3

Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

### Rota
A rota também será a /courses, porém o id do curso será passado via route params (ex.: /courses/id_do_curso).

## Informações
- Layout padrão
- Card do curso
- Link que redireciona para a página do curso

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio.

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Node.js
- Nunjucks
- Express

## :link: Como baixar o projeto

```bash
# clonar o respositório
$ git clone https://github.com/rosids/challenge3-launchbase.git

# entrar no repositório
$ cd challenge3-launchbase

# instalar as dependências
$ npm install

# iniciar o servidor
$ npm start

# acessando o projeto
- No seu navegador, acesse: localhost: 7000
```

## :link: Como contribuir

- Faça um Fork do repositório
- Clone o seu repositório
- Crie uma branch com a sua feature
- Faça um commit com suas mudanças
- 'Push' a sua branch
- Ir em Pull Requests do projeto original e criar uma pull request com o seu commit

## :memo: Licença

Esse projeto foi desenvolvido como prática e está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
