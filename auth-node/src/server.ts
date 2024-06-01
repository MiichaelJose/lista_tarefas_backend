import express from "express";

import router from "./routes/authentication";

const app = express();

const port = 3001;

// Iniciar o servidor
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});

app.use(router);