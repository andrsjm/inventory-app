import express from 'express'
import { middleware } from '../middleware/middleware.js'
import constant from '../constant/constant.js'
import handler from './handler.js'

const route = express.Router()

// route.get('/', middleware([constant.OFFICER_STAFF, constant.WAREHOUSE_STAFF]), handler.getAll)
// route.get('/:id', middleware([constant.OFFICER_STAFF, constant.WAREHOUSE_STAFF]), handler.find)
// route.post('/', middleware([constant.OFFICER_STAFF]), handler.insert)
// route.put('/:id', middleware([constant.OFFICER_STAFF]), handler.update)
// route.delete('/:id', middleware([constant.OFFICER_STAFF]), handler.deleteGoods)

route.get('/', handler.getAll)
route.get('/:id', handler.find)
route.post('/', handler.insert)
route.put('/:id', handler.update)
route.put('/status/:id', handler.update)
route.put('/update/:id', handler.updateStatus)

export default route