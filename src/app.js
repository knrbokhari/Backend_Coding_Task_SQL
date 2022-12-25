import express from 'express';
import helmet from 'helmet';

export const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server running")
})