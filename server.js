const dbconnection = require('./app/Connection/DB');

const express = require('express');
const app = express();

const http = require ('http');

const routes = require ('./app/Routes/routes');
const cors = require('cors');

const PORT=4001;

const server=http.createServer(app);
dbconnection();
app.use(express.json());
app.use(cors());

app.use(routes);

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})