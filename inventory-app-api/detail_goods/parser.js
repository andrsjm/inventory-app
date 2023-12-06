const parseDetailGoods = (req) => {
    const detailGoods = {
        id: parseId(req),
        goodsId : req.body.goodsId,
        date : req.body.date,
        stock : req.body.stock,
        supplier : req.body.supplier,
        expired : req.body.expired,
    }

    return detailGoods
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

export default {parseDetailGoods, parseId, parserFilter}