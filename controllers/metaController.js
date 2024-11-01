exports.calculateMeta = (req, res) => {
    const { meta, totalVendido, diaAtual } = req.body;
  
    console.log("Dados recebidos:", { meta, totalVendido, diaAtual });
  
    // Verificar dados de entrada
    if (typeof meta !== 'number' || typeof totalVendido !== 'number' || typeof diaAtual !== 'number' || diaAtual > 31) {
      console.log("Erro: Dados de entrada inválidos.");
      return res.status(400).json({ error: "Dados de entrada inválidos." });
    }
  
    // Cálculos
    const mediaDiaria = totalVendido / diaAtual;
    const previsaoFinal = mediaDiaria * 31;
    const porcentagemMeta = (previsaoFinal / meta) * 100;
    const diferencaMeta = previsaoFinal - meta;
  
    console.log("Resultados Calculados:", {
      mediaDiaria,
      previsaoFinal,
      porcentagemMeta,
      diferencaMeta,
      excedente: diferencaMeta >= 0
    });
  
    // Resposta com os resultados
    res.json({
      mediaDiaria: mediaDiaria.toFixed(2),
      previsaoFinal: previsaoFinal.toFixed(2),
      porcentagemMeta: porcentagemMeta.toFixed(2),
      diferencaMeta: diferencaMeta.toFixed(2),
      excedente: diferencaMeta >= 0
    });
  };
  