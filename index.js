import express from 'express'
import dotenv from "dotenv"

import createEmployee from './rest/createEmployee.js'

import get from './rest/get.js'
import getCompany from './rest/getCompany.js'
import getCompanyByName from './rest/getCompanyByName.js'
import getTodos from './rest/getTodos.js'

dotenv.config()
const app = express()

app.use(express.json())

app.get('/', get)
app.get('/getCompany', getCompany)
app.get('/getCompanyByName',getCompanyByName)
app.get('/getTodos',getTodos)
app.get('/createEmployee',createEmployee)

app.listen(`${process.env.PORT}`, () => {
    console.log(`App running at ${process.env.PORT} port`)
})
