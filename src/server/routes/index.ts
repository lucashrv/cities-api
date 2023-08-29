import { Router } from "express"

//controllers
import {
    CitiesController
} from "../controllers"

const router = Router()


//Routes
router.post('/api/cities', CitiesController.create)



export { router }
