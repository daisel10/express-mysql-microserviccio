import { config } from "dotenv";
config()

const configEnv= {
    api: {
        port: process.env.API_PORT || 1000,
    },
    post: {
        port: process.env.POST_PORT || 1002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_HOST || 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '123456789',
        database: process.env.MYSQL_DB || 'users',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 1001,
    }
}
export default configEnv;