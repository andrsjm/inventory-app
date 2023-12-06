import { unauthorizedResponse } from "../util/response.js";
import 'dotenv/config'

export const middleware = (userType) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
            
        if (!token) {
            return unauthorizedResponse(res)
        }

        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) {
                return unauthorizedResponse(res)
            }

            if(!userType.includes(user.type)){
                return unauthorizedResponse(res)
            }

            req.user = user;
            
            next();
        });
    };
};