import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.send('hello world')
})

router.get('/user', (req, res) => {
    res.send('usuario')
})

export default router;