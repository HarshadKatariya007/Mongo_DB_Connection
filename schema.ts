import mongoose from "mongoose";

let student  = new mongoose.Schema(
    {
        name:String,
        email:String,
        number:Number,
        age:Number,
    }
)

export const students = mongoose.model("Student data",student)
