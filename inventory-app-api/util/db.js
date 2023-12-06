import 'dotenv/config'
import pgs from 'pg';
const { Pool } = pgs;
import util from 'util'

const pool = new Pool({
    user: process.env.USERNAME_DB,
    host: process.env.HOST_DB,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB,
})

export const query = util.promisify(pool.query).bind(pool);

export const startTransaction = async () => {
    const client = await pool.connect();
    await client.query('BEGIN');
    return client;
};

export const commitTransaction = async (client) => {
    await client.query('COMMIT');
    client.release();
};

export const rollbackTransaction = async (client) => {
    await client.query('ROLLBACK');
    client.release();
};