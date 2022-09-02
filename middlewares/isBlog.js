const BlogSetting = require('../models/blogSettingModel');
const isBlog = async (req, res, next) => {
    try {
        const checkBlog = await BlogSetting.find({})
        if (checkBlog.length == 0 && req.originalUrl !='/blogPageSetup') {
            console.log('sss');
            res.redirect('/blogPageSetup')
        }
        else {
            console.log('snans');
            next();
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = { isBlog }