const app=require("express")()
const SampleRoutes=require("./routes/sample")
app.use("/",SampleRoutes)
app.listen(3001,()=>console.log("server started"))