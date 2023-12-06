import { query } from "../util/db.js";

const insert = async (goods) => {
    try {
        const queryText = 'INSERT INTO goods(name, category, image, unit, price) VALUES($1, $2, $3, $4, $5)';
        const values = [goods.name, goods.category, goods.image, goods.unit, goods.price];

        const result = await query(queryText, values);

        return {result: result.rows, err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const find = async (id) => {
    try {
        const queryText = 'SELECT g.*, SUM(dg.stock) AS total_stock FROM goods g LEFT JOIN detail_goods dg ON g.id = dg.goods_id WHERE g.id = $1 GROUP BY g.id';

        const result = await query(queryText, [id]);

        return {result: result.rows[0], err: null};
    } catch (e) {
        console.log(e)
        return {result: null, err: e};
    }
};

const update = async (goods) => {
    try {
        const queryText = 'UPDATE goods SET name = $1, category = $2, image = $3 WHERE id = $4'
        const values = [
            goods.name,
            goods.category,
            goods.image,
            goods.id
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
        let queryText = 'SELECT g.*, SUM(dg.stock) AS total_stock FROM goods g LEFT JOIN detail_goods dg ON g.id = dg.goods_id GROUP BY g.id';

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

const deleteGoods = async (id) => {
    try{
        const queryText = 'DELETE FROM goods WHERE id = $1'

        const result = await query(queryText, [id])

        return {result: result.rows, err: null};
    }catch(e){
        console.log(e)
        return {result: null, err: e};
    }
}

export default {deleteGoods, find, getAll, insert, update}