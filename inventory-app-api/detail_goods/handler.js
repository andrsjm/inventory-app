import { failedResponse, successResponse } from "../util/response.js"
import parser from "./parser.js"
import repo from './repository.js'

const insert = async (req, res) => {
    const goods = parser.parseDetailGoods(req)

    const result = await repo.insert(goods)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, null)
}

const find = async (req, res) => {
    const id = parser.parseId(req)

    const result = await repo.find(id)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, result.result)
}

const getAll = async (req, res) => {
    const filter = parser.parserFilter(req)

    const result = await repo.getAll(filter)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, result.result)
}

const update = async (req, res) => {
    const goods = parser.parseDetailGoods(req)

    const result = await repo.update(goods)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, null)
}

const deleteDetailGoods = async (req, res) => {
    const id = parser.parseId(req)

    const result = await repo.deleteDetailGoods(id)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, null)
}

export default {insert, update, find, getAll, deleteDetailGoods}