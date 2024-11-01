const express = require('express');
const metaRoutes = require('./routes/metaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Servir arquivos estáticos

app.use('/api/meta', metaRoutes); // Rota para cálculos

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
