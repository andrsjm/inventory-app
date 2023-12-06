import { query } from "../util/db.js";

const insert = async (detailGoods) => {
    try {
        const queryText = 'INSERT INTO detail_goods(goods_id, date, stock, supplier, expired) VALUES ($1, $2, $3, $4, $5)';
        const values = [detailGoods.goodsId, detailGoods.date, detailGoods.stock, detailGoods.supplier, detailGoods.expired];

        const result = await query(queryText, values);

        return {result: result.rows, err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const find = async (id) => {
    try {
        const queryText = 'SELECT * FROM detail_goods WHERE id = $1';

        const result = await query(queryText, [id]);

        return {result: result.rows[0], err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const update = async (detailGoods) => {
    try {
        const queryText = 'UPDATE detail_goods SET date = $1, expired = $2, supplier = $3, stock = $4 WHERE id = $5';
        const values = [
            detailGoods.date,
            detailGoods.expired,
            detailGoods.supplier,
            detailGoods.stock,
            detailGoods.id
        ]

        const result = await query(queryText, values);

        return {result: result.rows, err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
}

const getAll = async (filter) => {
    try {
        let params = []
        let queryText = 'SELECT * FROM detail_goods';

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

const deleteDetailGoods = async (id) => {
    try{
        const queryText = 'DELETE FROM detail_goods WHERE id = $1'

        const result = await query(queryText, [id])

        return {result: result.rows, err: null};
    }catch(e){
        console.log(e)
        return {result: null, err: e};
    }
}

export default {deleteDetailGoods, find, getAll, insert, update}