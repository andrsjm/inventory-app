import { comparedPassword } from '../util/bcrypt.js'
import { getJWTKey } from '../util/jwt.js'
import { failedResponse, successResponse } from '../util/response.js'
import  parser  from './parser.js'
import repo from './repository.js'

const addUser = async (req, res) => {
    const user = await parser.parseUser(req)

    const result = await repo.insert(user)
    if (result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, null)
}

const login = async (req, res) => {
    const userEntity = parser.parseLogin(req)

    const result = await repo.login(userEntity.email)
    if(result.err !== null) return failedResponse(res, result.err)
    
    const passwordMatch = await comparedPassword(userEntity.password, result.result.password)
    if (!passwordMatch) return failedResponse(res, "Email or Password wrong")
    

    delete result.result.password

    const jwtTToken = getJWTKey(result.result)
    result.result['accessToken'] = jwtTToken
    
    return successResponse(res, result.result)
}

const getAll = async (req, res) => {
    const filter = parser.parserFilter(req)

    const result = await repo.getAll(filter)
    if(result.err !== null) return failedResponse(res, result.err)

    return successResponse(res, result.result)

}

export default {addUser, login, getAll}