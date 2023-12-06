import { unauthorizedResponse } from "../util/response.js";
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const middleware = (userType) => {
    console.log('5')
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token)
            
        if (!token) {
            return unauthorizedResponse(res)
        }

        console.log('13')

        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            console.log('16')
            if (err) {
                return unauthorizedResponse(res)
            }

            console.log('21')

            if(!userType.includes(user.type)){
                return unauthorizedResponse(res)
            }

            console.log('27')

            req.user = user;
            
            next();
        });
    };
};