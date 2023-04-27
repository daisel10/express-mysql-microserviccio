import {createPool, createConnection} from 'mysql2/promise.js';

import config from '../../../config.js';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port:3306,
    database: 'users'
});