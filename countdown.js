// Função para calcular o tempo restante até o Natal
function contarTempoParaONatal() {
  const hoje = new Date(); // Data de hoje
  const natal = new Date(hoje.getFullYear(), 11, 25); // Data do Natal (25 de dezembro do ano atual)

  // Se já passou o Natal deste ano, calcular para o próximo ano
  if (hoje > natal) {
    natal.setFullYear(hoje.getFullYear() + 1);
  }

  // Calcular a diferença em milissegundos
  const diferenca = natal - hoje;

  // Calcular os dias, horas, minutos e segundos restantes
  const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000);

  return { diasRestantes, horasRestantes, minutosRestantes, segundosRestantes };
}

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva() {
  const contadorElemento = document.getElementById("contador"); // Elemento onde a contagem será exibida
  const felizNatalElemento = document.getElementById("felizNatal"); // Elemento da mensagem "Feliz Natal"
  const confetesElemento = document.getElementById("confetes"); // Elemento para os confetes

  // Inicializa a animação de "Feliz Natal" como invisível
  felizNatalElemento.classList.remove("show");

  // Função para criar confetes caindo
  function gerarConfetes() {
    const confete = document.createElement("div");
    confete.classList.add("confete");

    // Posicionamento aleatório
    const posX = Math.random() * 100; // Posição horizontal aleatória
    confete.style.left = `${posX}vw`; // 'vw' para torná-lo responsivo

    // Adiciona o confete no contêiner
    confetesElemento.appendChild(confete);

    // Remove o confete após a animação
    setTimeout(() => {
      confetesElemento.removeChild(confete);
    }, 2000); // O tempo de animação dos confetes
  }

  // Atualiza a contagem a cada segundo (1000 milissegundos)
  const intervalo = setInterval(function() {
    const { diasRestantes, horasRestantes, minutosRestantes, segundosRestantes } = contarTempoParaONatal();

    // Atualiza o texto do contador com o formato de relógio digital
    contadorElemento.innerText = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;

    // Quando chegar ao Natal, pare a contagem e mostre a animação de Feliz Natal
    if (diasRestantes <= 0 && horasRestantes <= 0 && minutosRestantes <= 0 && segundosRestantes <= 0) {
      clearInterval(intervalo);
      contadorElemento.innerText = ""; // Limpa o contador
      felizNatalElemento.classList.add("show"); // Exibe a animação de "Feliz Natal!"

      // Inicia a queda dos confetes
      setInterval(gerarConfetes, 100); // Gera confetes a cada 100ms
    }
  }, 1000);
}

// Chama a função para iniciar a contagem regressiva
iniciarContagemRegressiva();

// Função para iniciar a animação do trenó ao redor do contador
function iniciarAnimacaoTreno() {
  const treno = document.getElementById("treno");

  // A animação já está no CSS, então aqui só chamamos a função para iniciar a animação
  // Não há mais necessidade de alternar a direção no JS, a rotação circular é controlada pelo CSS
}

// Iniciar a animação do trenó
iniciarAnimacaoTreno();
