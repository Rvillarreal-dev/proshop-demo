import express from 'express'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 8080

connectDB();

//const port = 8080
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id)
//     res.json(product)
// })

app.listen(port, () => console.log(`Server is running on port ${port}`))