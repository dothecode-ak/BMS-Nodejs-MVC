const express=require('express');
const indeRouter=require('./routes/index');
const isBlog=require('./middlewares/isBlog')
require('./databse/db.config')
require('dotenv').config();
const app=express();
const PORT=process.env.PORT || 3001;
app.use(isBlog.isBlog)
app.use('/',indeRouter)
app.listen(PORT,()=>
{
    console.log(`Server is running at ${PORT}`);
});