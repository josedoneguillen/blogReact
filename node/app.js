import express from 'express';
import cors from 'cors';
import db from "./database/db.js";
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', routes);

try {
    await db.authenticate();
    console.log('Database connection succssesful!');
} catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server Up running in http://localhost:8000/');
});