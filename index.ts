import { connect } from "./connect";
import express from "express";
import {Request,Response} from "express"
import { students } from "./schema";
import { data_check } from "./middleware";


const App = express()

App.use(express.json())

App.get("/",async (req:Request,res:Response) =>
{
    let student = await students.find()
    res.send(student)
})

App.post("/",data_check,async (req:Request,res:Response) =>
{
    let data = await students.create(req.body)
    res.send(data)
}) 

App.listen(4000,() =>
{
    console.log("Server Is Running");
    connect()
})