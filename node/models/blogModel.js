import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define('tbl_posts', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
});

export default BlogModel;