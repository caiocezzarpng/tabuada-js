function gerarTabuada() {
  let numeroNaoConvertido = document.getElementById("num");
  let tab = document.getElementById("selectTab");

  if (verifica(numeroNaoConvertido) == false) {
    alert("Por favor, digite um numero");
  } else {
    let num = Number(numeroNaoConvertido.value);
    tab.innerHTML = "";
    for (let numeroContador = 1; numeroContador <= 10; numeroContador++) {
      /* tabuada += num + " x " + numeroContador + " = " + num * numeroContador + "<br>" */
      let item = document.createElement("option");
      item.text = num + " x " + numeroContador + " = " + num * numeroContador;
      item.value = "tab" + numeroContador;
      tab.appendChild(item);
    }
  }
}
function verifica(numeroNaoConvertido) {
  if (numeroNaoConvertido.value.length == 0) {
    return false;
  } else {
    return true;
  }
}
