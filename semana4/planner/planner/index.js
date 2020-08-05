function criarTarefa() {
    const tarefaAdicionada = document.getElementById("task")
    let tarefaDeHoje = userTask.value

    const day = document.getElementById("dias-semana")
    let selectDay = day.value
    const diaSelecionado = document.getElementById(selectDay)
    diaSelecionado.innerHTML += `<p>${tarefaDeHoje}</p>`
    userTask = " "
}

// if (day === "domingo") {
//     const sundayTask = document.getElementById(selectDay)
//     sundayTask.innerHTML += `<li${toDo}</li>`
//     userTask.value = ""
// }