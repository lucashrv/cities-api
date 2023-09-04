import { Request, Response } from "express"
import {
    object,
    string,
    number
} from 'yup'
import { validation } from "../../shared/middleware"

interface IQueryProps {
    page?: number
    limit?: number
    filter?: string
}

export const getAllValidation = validation(getSchema => ({
    query: getSchema<IQueryProps>(object({
        page: number().optional().moreThan(0),
        limit: number().optional().moreThan(0),
        filter: string().optional()
    }))
}))

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

    const dataQuery: IQueryProps = { ...req.query }

    return res.status(500).json({ error: 'Not implemented'})
}
