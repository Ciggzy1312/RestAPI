const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const usersRoute = require('./routers/users.js')
app.use('/', usersRoute);

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}...`);
})
