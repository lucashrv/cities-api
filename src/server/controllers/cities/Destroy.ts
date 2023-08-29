import { Request, Response } from "express"

export const destroy = (req: Request, res: Response) => {

    return res.send('destroy')
}