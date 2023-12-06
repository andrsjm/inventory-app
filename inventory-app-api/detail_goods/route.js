import express from 'express'
import { middleware } from '../middleware/middleware.js'
import constant from '../constant/constant.js'
import handler from './handler.js'

const route = express.Router()

// route.get('/', middleware([constant.WAREHOUSE_STAFF, constant.OFFICER_STAFF]), handler.getAll)
// route.get('/:id', middleware([constant.WAREHOUSE_STAFF, constant.OFFICER_STAFF]), handler.find)
// route.post('/', middleware([constant.WAREHOUSE_STAFF]), handler.insert)
// route.put('/:id', middleware([constant.WAREHOUSE_STAFF]), handler.update)
// route.delete('/:id', middleware([constant.WAREHOUSE_STAFF]), handler.deleteDetailGoods)

route.get('/', handler.getAll)
route.get('/:id', handler.find)
route.post('/', handler.insert)
route.put('/:id', handler.update)
route.delete('/:id', handler.deleteDetailGoods)


export default route