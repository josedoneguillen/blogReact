import { Sequelize } from "sequelize";

const db = new Sequelize('blog_db', 'root', '', {
    host: 'localHost',
    dialect: 'mysql'
});


export default db;

