import { Request, Response } from "express"
import {
    ObjectSchema,
    object,
    string,
    ValidationError
} from 'yup'

interface City {
    name: string
    state: string
}

const bodyValidation: ObjectSchema<City> = object({
    name: string().required().min(3),
    state: string().required().min(3),
})

// export const createBodyValidator: RequestHandler = async (req, res, next) => {
//     const data: City = {
//         ...req.body
//     }

//     try {

//         validateData = await bodyValidation.validate(data)

//         return res.json(data)

//     } catch (error) {

//         const yupError = error as ValidationError

//         return res.status(500).json({
//             errors: {
//                 default: yupError.message
//             }
//         })

//     }
// }

export const create = async (req: Request<{}, {}, City>, res: Response) => {

    const data: City = {
        ...req.body
    }

    let validatedData: City | undefined = undefined

    try {

        validatedData = await bodyValidation.validate(data, { abortEarly: false })

        return res.json(validatedData)

    } catch (err) {

        const yupError = err as ValidationError
        const errors: Record<string, string> = {}

        yupError.inner.forEach(error => {
            if (!error.path) return

            errors[error.path] = error.message
        })

        return res.status(400).json({ errors })

    }
}
