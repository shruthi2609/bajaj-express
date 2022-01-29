const loggerMw=(req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    next()
}
module.exports=loggerMw