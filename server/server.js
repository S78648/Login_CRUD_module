import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'

env.config();
const app = express();
app.use(express.json());



app.listen(process.env.PORT,()=>console.log(`App running on ${process.env.PORT}`));
