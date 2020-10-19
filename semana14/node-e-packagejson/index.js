// EXERCÍCIO 1
//A)
/**/

// B)
const red = "\033[31m";
const blue = "\u001b[34m";
const name = process.argv[2];
const age = process.argv[3];

const ImprimirMensagem = (name, age) => {
  console.log(red + " Olá,", name, "!", "Você tem", blue, age, blue, "anos.")

}

return ImprimirMensagem(name, age);

//C)
// const name = process.argv[2];
// const age = Number(process.argv[3]);

// const ImprimirMensagem = (name, age) => {
//   console.log("Olá,", name, "!", "Você tem", age, "anos e terá daqui a 7 anos: ", age + 7, "anos.")

// }

// return ImprimirMensagem(name, age);

//EXERCÍCIO 2 

// const pass = process.argv[2];
// const numberOne = Number(process.argv[3]);
// const numberTwo = Number(process.argv[4]);

// const Calc = (pass, numberOne, numberTwo) => {
//   if (pass === "add") {
//     console.log(numberOne + numberTwo)
//   } else if (pass === "sub") {
//     console.log(numberOne - numberTwo)
//   } else if (pass === "mult") {
//     console.log(numberOne * numberTwo)
//   } else if (pass === "div") {
//     console.log(numberOne / numberTwo)
//   } else {
//     console.log("Verifique a Chave e os números!!")
//   }

// }

// return Calc(pass, numberOne, numberTwo);

//EXERCÍCIO 3 

// const newTask = process.argv[2];
// const listTasks = ["correr", "pedalar"];

// const taskInsert = (newTask) => {
//   listTasks.push(newTask)

//   console.log(listTasks)
// }
// return taskInsert(newTask);









