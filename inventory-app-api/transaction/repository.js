import { query } from "../util/db.js";

const insert = async (transaction, client) => {
    try {
        const queryText = 'INSERT INTO transactions(type, date, sender, recipient, status) VALUES($1, $2, $3, $4, $5) RETURNING id';
        const values = [transaction.type, transaction.date, transaction.sender, transaction.recipient, transaction.status];

        const result = await client.query(queryText, values);

        return result.rows[0]
    } catch (e) {
        console.log(e)
        throw e
    }
};

const find = async (id) => {
    try {
        const queryText = 'SELECT * FROM transactions WHERE id = $1';

        const result = await query(queryText, [id]);

        return {result: result.rows[0], err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const update = async (transaction, client) => {
    try {
        const queryText = 'UPDATE transactions SET date = $1, type = $2, recipient = $3, sender = $4 WHERE id = $5';
        const values = [
            transaction.date,
            transaction.type,
            transaction.recipient,
            transaction.sender,
            transaction.id
        ]

        const result = await client.query(queryText, values);

        return result.rows
    } catch (e) {
        console.log(e)
        throw e
    }
}

const getAll = async (filter) => {
    try {
        let params = []
        let queryText = 'SELECT * FROM transactions';

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

const updateStatus = async (id, client) => {
    try {
        const queryText = 'UPDATE transactions SET status = status + 1 WHERE id = $1 RETURNING type, status';

        const result = await client.query(queryText, [id]);

        return result.rows[0]
    } catch (e) {
        console.log(e)
        throw e
    }
}

const updateStatusFailed = async (id, client) => {
    try {
        const queryText = 'UPDATE transactions SET status = 4 WHERE id = $1';

        const result = await client.query(queryText, [id]);

        return result.rows[0]
    } catch (e) {
        console.log(e)
        throw e
    }
}

const performTransaction = async (id, client) => {
    try {
        const queryText = 'SELECT process_transaction($1)'

        const result = await client.query(queryText, [id])

        return result.rows
    } catch (e) {
        console.log(e)
        throw e
    }
}

export default {updateStatus, find, getAll, insert, update, performTransaction, updateStatusFailed}