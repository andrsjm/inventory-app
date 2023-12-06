import { query } from "../util/db.js";

const insert = async (detailTransaction, client) => {
    try {
        const queryText = 'INSERT INTO detail_transactions(goods_id, transaction_id, stock) VALUES($1, $2, $3)';
        const values = [detailTransaction.goodsId, detailTransaction.transactionId, detailTransaction.stock];

        const result = await client.query(queryText, values);

        return result.rows
    } catch (e) {
        console.log(e)
        throw e
    }
};

const update = async (detailTransaction, client) => {
    try {
        const queryText = 'UPDATE detail_transactions SET stock = $1 WHERE id = $2';
        const values = [
            detailTransaction.stock,
            detailTransaction.id
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
        let queryText = 'SELECT * FROM detail_transactions';

        if(filter.goodsId){
            queryText += ' WHERE transaction_id = $1'
            params.push(filter.transactionId)
        }

        const result = await query(queryText, params);
        (result.rows)

        return {result: result.rows, err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const deleteDetailTransaction = async (id, client) => {
    try{
        const queryText = 'DELETE FROM detail_transactions WHERE id = $1'

        const result = await client.query(queryText, [id])

        return result.rows
    }catch(e){
        console.log(e)
       throw e
    }
}

export default {deleteDetailTransaction, getAll, insert, update}