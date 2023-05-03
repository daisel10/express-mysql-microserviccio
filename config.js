import { config } from "dotenv";
config()

const configEnv= {
    api: {
        port: process.env.API_PORT || 1000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'admit',
        database: process.env.MYSQL_DATABASE || 'users'
    }
}
export default configEnv;