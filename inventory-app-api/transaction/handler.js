import { commitTransaction, rollbackTransaction, startTransaction } from "../util/db.js"
import { failedResponse, successResponse } from "../util/response.js"
import parser from "./parser.js"
import repoTransaction from './repository.js'
import repoDetailTransaction from '../detail_transaction/repository.js'
import { parse } from "dotenv"

const insert = async (req, res) => {
    const transaction = parser.parseTransaction(req)

    const client = await startTransaction()

    try {
        const result = await repoTransaction.insert(transaction, client)
        for (const detail of transaction.detailTransaction) {
            detail['transactionId'] = result.id
            await repoDetailTransaction.insert(detail, client);
        }

        await commitTransaction(client);
        return successResponse(res, null);
    } catch (e) {
        await rollbackTransaction(client);
        console.error(e);
        return failedResponse(res, e);
    }
}

const getAll = async (req, res) => {
    const filter = parser.parserFilter(req)

    const result = await repoTransaction.getAll(filter)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, result.result)
}

const find = async (req, res) => {
    const id = parser.parseId(req)

    const resultTransasction = await repoTransaction.find(id)
    if(resultTransasction.err !== null) return failedResponse(res, resultTransasction.err)
    let transaction = resultTransasction.result

    const resultDetailTransaction = await repoDetailTransaction.getAll({transactionId: id})
    if(resultDetailTransaction.err !== null) return failedResponse(res, resultDetailTransaction.err)

    transaction['detailTransaction'] = resultDetailTransaction.result

    return successResponse(res, transaction)
}

const update = async (req, res) => {
    const transaction = parser.parseTransactionUpdate(req)

    const client = await startTransaction()

    try {
        await repoTransaction.update(transaction, client)
        if(transaction.addedDetailTransaction){
            for (const detail of transaction.addedDetailTransaction){
                detail['transactionId'] = transaction.id
                await repoDetailTransaction.insert(detail, client)
            }
        }

        if(transaction.updatedDetailTransaction){
            for(const detail of transaction.updatedDetailTransaction){
                await repoDetailTransaction.update(detail, client)
            }
        }

        if(transaction.deletedDetailTransaction){
            for(const id of transaction.deletedDetailTransaction){
                await repoDetailTransaction.deleteDetailTransaction(id, client)
            }
        }

        await commitTransaction(client);
        return successResponse(res, null);
    } catch (e) {
        await rollbackTransaction(client);
        console.error(e);
        return failedResponse(res, e);
    }
}

const updateStatus = async (req, res) => {
    const id = parser.parseId(req)

    const client = await startTransaction()

    try {
        const result = await repoTransaction.updateStatus(id, client)
        
        if(result.type == 0 && result.status == 2){
            await repoTransaction.performTransaction(id, client)
        }else if(result.type == 1 && result.status == 1){
            await repoTransaction.performTransaction(id, client)
        }

        await commitTransaction(client);
        return successResponse(res, null);
    } catch (e) {
        await rollbackTransaction(client);
        console.error(e);
        return failedResponse(res, e.message);
    }
}

export default {insert, getAll, find, update, updateStatus}

