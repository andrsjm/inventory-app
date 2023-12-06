import { getHashedPassword } from "../util/bcrypt.js"

const parseUser = async (req) => {
    const user = {
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
        email: req.body.email,
        password: await getHashedPassword(req.body.password)
    }

    return user
}

const parseId = async (req) => {
    const id = req.params.id

    return id
}

const parseLogin = (req) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    return user
}

const parserFilter = (req) => {
    const filter = {
        offset: req.query.offset,
        limit: req.query.limit
    }

    return filter
}


export default {parseUser, parseId, parseLogin, parserFilter}