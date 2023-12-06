const parseTransaction = (req) => {
    const goods = {
        id: parseId(req),
        type : req.body.type,
        date : req.body.date,
        sender : req.body.sender,
        recipient : req.body.recipient,
        status : req.body.status,
        detailTransaction : req.body.detailTransaction,
    }

    return goods
}

const parseTransactionUpdate = (req) => {
    const goods = {
        id: parseId(req),
        type : req.body.type,
        date : req.body.date,
        sender : req.body.sender,
        recipient : req.body.recipient,
        status : req.body.status,
        updatedDetailTransaction : req.body.updatedDetailTransaction,
        addedDetailTransaction : req.body.addedDetailTransaction,
        deletedDetailTransaction : req.body.deletedDetailTransaction
    }

    return goods
}

const parseId = (req) => {
    const id = req.params.id

    return id
}

const parserFilter = (req) => {
    const filter = {
        offset: req.query.offset,
        limit: req.query.limit
    }

    return filter
}

export default {parseTransaction, parseId, parserFilter, parseTransactionUpdate}