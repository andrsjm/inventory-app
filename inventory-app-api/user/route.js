import express from 'express'
import handler from './handler.js'
import { middleware } from '../middleware/middleware.js'
import constant from '../constant/constant.js'

const route = express.Router()

route.post('/', middleware([constant.SUPER_ADMIN]) ,handler.addUser)
route.post('/login', handler.login)
route.get('/', handler.getAll)

export default route