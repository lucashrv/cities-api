import { Request, Response } from "express"
import {
    object,
    string
} from 'yup'
import { validation } from "../../shared/middleware"

interface ICity {
    name?: string
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICity>(object({
        name: string().optional().min(3),
    }))
}))

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {

    const data: ICity = {
        ...req.body
    }

    return res.status(500).json({ error: 'Not implemented'})
}
