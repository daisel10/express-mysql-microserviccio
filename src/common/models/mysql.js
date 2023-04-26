import {createPool, createConnection} from 'mysql2';

import config from '../../../config.js';

export const pool = createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    port:3306,
    database: 'users'
});