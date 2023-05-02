import {createPool, createConnection} from 'mysql2/promise.js';

import config from '../../../config.js';

export const pool = createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    port:config.mysql.port,
    database: config.mysql.database
});