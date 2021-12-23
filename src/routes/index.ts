import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('home')
})
router.get('/dogs', (req, res) => {
    res.send('Cachorros')
})
router.get('/cats', (req, res) => {
    res.send('Gatos')
})
router.get('/fish', (req, res) => {
    res.send('Peixes')
})
router.get('/search', (req, res) => {
    res.send('search')
})

export default router
