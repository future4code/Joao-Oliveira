type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// REPOSTA A:

/* Basta executar o comando "npm start `nome-do-arquivo.ts` para que ocorra o processo de transpilação.*/

// RESPOSTA B:
/* Uma vez que o arquivo se encontra dentro da pasta "src" é necessário especificar o caminho até o arquivo ts que deve ser transpilado. */


// RESPOSTA C:
/* Para que seja realizada a transpilação em vários arquivos ao mesmo tempo é necessário executar o comando tsc assim ele criará e/ou atualizará os arquivos .ts existentes. */


// RESPOSTA D:
/*Como eu comecei a ler a partir das instruções eu apenas criei uma pasta como o nome tsconfig.json e coloquei as configurações que estavam especificadas, não executando o tsc --init. O que me chamou mais atenção foi a configuração do rootDir e do outDir, uma ves que com elas habilitadas fica bem mais simples de organizar nosso código. */