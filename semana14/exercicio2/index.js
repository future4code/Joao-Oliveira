//EXERCÍCIO 2

const pass = process.argv[2];
const numberOne = Number(process.argv[3]);
const numberTwo = Number(process.argv[4]);

const Calc = (pass, numberOne, numberTwo) => {
  if (pass === "add") {
    console.log(numberOne + numberTwo)
  } else if (pass === "sub") {
    console.log(numberOne - numberTwo)
  } else if (pass === "mult") {
    console.log(numberOne * numberTwo)
  } else if (pass === "div") {
    console.log(numberOne / numberTwo)
  } else {
    console.log("Verifique a Chave e os números!!")
  }

}

return Calc(pass, numberOne, numberTwo);