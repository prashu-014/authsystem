import express from 'express';
import cors from 'cors';
import loginRouter from './router/login.Router.js'
import runSetup from './config/databaseConnection.js';

const app = express();
app.use(cors());
app.use(express.json())


app.use('/api/login', loginRouter);



app.get('/', async (req, res) => {
    res.send("hello prashant");
});

app.listen(5001,async () => {
    console.log("Server is running on port 5000");
    await runSetup()
});
