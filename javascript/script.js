function verificarIdade() {
  let idade = prompt(
    "Você possui mais de 18 anos? Responda com 'sim' ou 'não':"
  ).toLowerCase();

  if (idade === "sim") {
    window.location.href = "pages/home.html";
  } else if (idade === "não" || idade === "nao") {
    window.location.href = "https://www.cartoonnetwork.com.br/";
  } else {
    alert("Por favor, responda com 'sim' ou 'não'.");
  }
}
verificarIdade();
