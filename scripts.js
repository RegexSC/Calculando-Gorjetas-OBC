function calculatePedido(event) {
  event.preventDefault();
  let pedido = document.getElementById("valorPed").value;
  let nota = document.getElementById("avaliacao").value;
  let pessoas = document.getElementById("divisor").value;

  if ((pedido == "") | (nota == 0) | (pessoas == 0)) {
    alert("Por favor, preencha os valores!");
    return;
  }

  if ((pessoas == "") | (pessoas == 1)) {
    document.getElementById("total").style.display = "block";
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("total").style.display = "block";
  }

  let valorFinal = (pedido * nota) / pessoas;
  document.getElementById("valor").innerHTML =
    "Valor da gorjeta R$ " + parseFloat(valorFinal).toFixed(2);
  document.getElementById("total").style.display = "block";
}
function reload(event) {
  document.getElementById("total").style.display = "none";
  return;
}

document.getElementById("total").style.display = "none";

document.getElementById("pedido").addEventListener("submit", calculatePedido);
document.getElementById("pedido").addEventListener("reset", reload);
