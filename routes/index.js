const express=require('express');
var router=express.Router();
const BlogController=require('../controller/BlogController')
router.get('/',BlogController.indexPage);
router.get('/contact',BlogController.contactPage)
router.get('/blogPageSetup',BlogController.blogPageSetup)
module.exports=router;