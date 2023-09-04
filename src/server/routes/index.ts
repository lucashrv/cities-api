import { Router } from "express"

//controllers

import {
    CitiesController
} from "../controllers"

const router = Router()


//Routes

router.get('/api/cities', CitiesController.getAllValidation, CitiesController.getAll)
router.post('/api/cities', CitiesController.createValidation, CitiesController.create)



export { router }
