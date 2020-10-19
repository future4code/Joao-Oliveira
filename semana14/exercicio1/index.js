
//A)



//B)
const red = "\033[31m";
const blue = "\u001b[34m";
const name = process.argv[2];
const age = Number(process.argv[3]);

const ImprimirMensagem = (name, age) => {
  console.log(red + " Olá,", name, "!", blue, "Você tem", age, blue, "anos.")

}

return ImprimirMensagem(name, age);

//C)

// const name = process.argv[2];
// const age = Number(process.argv[3]);

// const ImprimirMensagem = (name, age) => {
//   console.log("Olá,", name, "!", "Você tem", age, "anos e terá daqui a 7 anos: ", age + 7, "anos.")
// }
