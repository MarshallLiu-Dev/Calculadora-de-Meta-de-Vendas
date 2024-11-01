# Meta de Vendas

## Descrição
Este é um aplicativo em Node.js que permite calcular e exibir o progresso em relação à meta de vendas mensal. O usuário pode inserir a meta, o total vendido até o momento e o dia atual do mês. O app então fornece informações sobre a média diária de vendas, previsão para o fim do mês, porcentagem da meta atingida e o valor faltante ou excedente em relação à meta.

## Funcionalidades
- Cálculo da média diária de vendas.
- Previsão de vendas para o fim do mês com base na média diária.
- Porcentagem de meta atingida até o momento.
- Cálculo do valor faltante ou excedente para atingir a meta mensal.
- Suporte para formatação de entrada de valores em formato brasileiro (ex: `80.000,00`).

## Pré-requisitos
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados.
- Navegador para acessar a interface web.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/meta-vendas.git
   cd meta-vendas


2. Instale as dependências:

    ```bash
    npm install


3. Inicie o servidor::
   ```bash
   node app.js


4. Abra o navegador e acesse:

    ```bash
    http://localhost:3000
  


## Estrutura de Arquivos

project-root
│
├── public
│   ├── index.html          # Interface HTML do usuário
│   ├── styles.css          # Estilos do app
│   └── script.js           # JavaScript do front-end para cálculos e formatação
│
├── routes
│   └── metaRoutes.js       # Roteador das rotas de API para meta de vendas
│
├── controllers
│   └── metaController.js   # Lógica de cálculo da meta de vendas
│
├── app.js                  # Arquivo principal do servidor Express
└── package.json            # Dependências e configurações do projeto


## Como Contribuir

Sinta-se à vontade para enviar pull requests ou reportar issues no repositório.