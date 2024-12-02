function toggleDescription(button) {
  // Seleciona o próximo elemento irmão (a descrição)
  const info = button.nextElementSibling;

  // Alterna entre mostrar e esconder a descrição
  if (info.style.display === "block") {
    info.style.display = "none"; // Esconde
    button.textContent = "Ver mais"; // Atualiza o texto do botão
  } else {
    info.style.display = "block"; // Mostra
    button.textContent = "Ver menos"; // Atualiza o texto do botão
  }
}
