const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var cors = require('cors');
const sequelize=require('../backend/model/expensedatabase');
const router=require('../backend/router/index');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


    // app.use((req,res)=>{
    //     console.log("only for testing purpose");
    //     res.end();
    // })

 app.use(router);

sequelize.sync().then((result)=>{
    app.listen(4000);
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

