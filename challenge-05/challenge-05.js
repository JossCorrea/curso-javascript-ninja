/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [5,'joss',[1,2,3],null,{prop1:30}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(array){
  return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornarArray(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarValorIndice(array,indice){
  return array[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = [1,'xuxu',55, null,'amor']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornarValorIndice(myArray,0));
console.log(retornarValorIndice(myArray,1));
console.log(retornarValorIndice(myArray,2));
console.log(retornarValorIndice(myArray,3));
console.log(retornarValorIndice(myArray,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
var livros = {
  'Ensaio sobre a cegueira':{
    quantidadePaginas: 100,
    autor: 'José Saramago',
    editora: 'Cia das Letras'
  },
    'Cem anos de solidão':{
    quantidadePaginas: 200,
    autor: 'Gabriel Garcia Marquez',
    editora: 'Sextante'
  },
  'Pequenas criaturas': {
    quantidadePaginas: 80,
    autor: 'Rubem Fonseca',
    editora: 'Alternativa'
  }
}
return !nomeLivro? livros : livros[nomeLivro]
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeDoLivro = 'Ensaio sobre a cegueira'
console.log("O livro "+ nomeDoLivro +" tem " +book(nomeDoLivro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "+ nomeDoLivro +" é " + book(nomeDoLivro).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+ nomeDoLivro +" foi publicado pela editora " + book(nomeDoLivro).editora + ".");

