import { Router } from "express"

const router = Router()

router.get('/', (req,res) => res.status(500).send('rotuer /'))

export { router }
