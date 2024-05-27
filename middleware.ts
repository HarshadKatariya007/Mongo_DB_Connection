import { NextFunction, Request, Response } from "express";

export const data_check = (req:Request,res:Response,next:NextFunction) =>
{
    let {name,email,number,age} =req.body

    if(!name || !email || !number || !age)
        {
            res.status(400).send("Invalid Data")
        }
    else
    {
        next()
    }
}