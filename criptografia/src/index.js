const express = require('express');
const app = express();

const router = require('./router');
const model = require("./model/model")

app.use(express.json())
app.use(router);

model.sequelize.sync().then(()=>{
    console.log("connect with database")
})

app.listen(8000, ()=>{
    console.log("Server starting http:localhost:3333")
})