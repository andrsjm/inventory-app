import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const getJWTKey = (data) => {
    const token = jwt.sign(data, process.env.JWT_KEY);
  
    return token
}