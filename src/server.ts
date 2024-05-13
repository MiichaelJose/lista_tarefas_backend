import express from 'express'

import router from './routes'

const app = express();

app.use(express.json())

console.log(router);


app.use(router)

app.listen(3000, () => 'server running on port 3000')