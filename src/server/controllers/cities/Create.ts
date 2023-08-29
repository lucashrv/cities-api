import { Request, Response } from "express"
import {
    ObjectSchema,
    object,
    string,
    ValidationError
} from 'yup'

interface City {
    name: string
}

const bodyValidation: ObjectSchema<City> = object({
    name: string().required().min(3)
})

export const create = async (req: Request<{}, {}, City>, res: Response) => {

    const data: City = {
        ...req.body
    }

    let validateData: City | undefined = undefined

    try {

        validateData = await bodyValidation.validate(data)

        return res.json(data)

    } catch (error) {

        const yupError = error as ValidationError

        return res.status(500).json({
            errors: {
                default: yupError.message
            }
        })

    }
}
