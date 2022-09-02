
const indexPage=(req,res)=>
{
res.json({name:"Anil",age:28})
}
const contactPage=(req,res)=>
{
    res.send("Contact 1")
}
const blogPageSetup=(req,res)=>
{
    res.send("blogPageSetup")
}
module.exports={indexPage,contactPage,blogPageSetup}