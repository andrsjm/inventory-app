const parseGoods = (req) => {
    const goods = {
        id: parseId(req),
        name : req.body.name,
        category : req.body.category,
        image : req.body.image,
        unit : req.body.unit,
        price : req.body.price,
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

export default {parseGoods, parseId, parserFilter}