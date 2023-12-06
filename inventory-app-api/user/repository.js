import { query } from "../util/db.js";

const insert = async (user) => {
    try {
        const queryText = 'INSERT INTO users(type, name, image, email, password) VALUES ($1, $2, $3, $4, $5)';
        const values = [user.type, user.name, user.image, user.email, user.password];

        const result = await query(queryText, values);

        return {result: result.rows, err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const find = async (id) => {
    try {
        const queryText = 'SELECT * FROM users WHERE id = $1';

        const result = await query(queryText, [id]);

        return {result: result.rows[0], err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const login = async (email) => {
    try {
        const queryText = 'SELECT * FROM users WHERE email = $1';

        const result = await query(queryText, [email]);

        return {result: result.rows[0], err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const getAll = async (filter) => {
    try {
        let params = []
        let queryText = 'SELECT * FROM users Order By id ASC';

        if(filter.offset !== ''){
            queryText += ' OFFSET $1'
            params.push(filter.offset)
        }

        if(filter.limit !== ''){
            queryText += ' LIMIT $2'
            params.push(filter.limit)
        }

        const result = await query(queryText, params);

        return {result: result.rows, err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

export default {insert, find, login, getAll}