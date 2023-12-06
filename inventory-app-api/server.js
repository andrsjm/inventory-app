import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import userRoute from './user/route.js'
import goodsRoute from './goods/route.js'
import detailGoodsRoute from './detail_goods/route.js'
import transactionRoute from './transaction/route.js'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(cors({
    origin: ['http://localhost:5173', 'http://10.10.101.121:5173']
}))

app.use('/user', userRoute)
app.use('/goods', goodsRoute)
app.use('/detail-goods', detailGoodsRoute)
app.use('/transaction', transactionRoute)

app.listen(process.env.PORT, () => {
    console.log(`App listen to Port ${process.env.PORT}`)
})
