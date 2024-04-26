# Projeto Node.js com Express

Este é um projeto básico de Node.js com o framework Express.js. O projeto inclui configuração de servidor, roteamento, middleware e tratamento de erros.

## Configuração

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

1. **Instalação de Dependências:**
   Execute o seguinte comando para instalar as dependências do projeto:


2. **Execução do Servidor:**
Para iniciar o servidor, utilize o seguinte comando: set DEBUG=myapp:* & npm start


O servidor será executado na porta 3000 por padrão. Você pode acessá-lo em `http://localhost:3000`.

## Estrutura de Arquivos

- `app.js`: O ponto de entrada do aplicativo, onde o servidor Express é configurado.
- `routes/`: Este diretório contém os arquivos de roteamento para diferentes partes do aplicativo.
- `views/`: Aqui estão as visualizações (templates) do aplicativo, escritas usando o mecanismo de modelo Jade.
- `public/`: Este diretório contém arquivos estáticos, como CSS, JavaScript e imagens.
- `package.json`: O arquivo de manifesto do projeto, onde as dependências e scripts de inicialização são definidos.

## Principais Dependências

- `express`: O framework web usado para criar o servidor e definir rotas.
- `http-errors`: Uma biblioteca para criar erros HTTP.
- `morgan`: Um logger de solicitações HTTP.
- `cookie-parser`: Um middleware para analisar cookies de solicitação HTTP.

## Como Contribuir

Sinta-se à vontade para enviar pull requests ou abrir issues se encontrar problemas ou quiser melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
