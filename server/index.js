import express from 'express'
import dotnev from 'dotenv'
import morgan from 'morgan'
import mongoConnect from './config/dbConnect.js';
import authRotes from './routes/authRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import skillRoutes from './routes/skillRoutes.js'
import cors from 'cors'

const app = express();


dotnev.config();

//databse connection function
mongoConnect()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//api
app.use('/api/v1/auth',authRotes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/skill',skillRoutes)




const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${process.env.PORT}`)
})




