const app=require("express")()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
/*const SampleRoutes=require("./routes/sample")
app.use("/",SampleRoutes)*/
const signup=require("./routes/createUser")
app.use("/",signup)
app.listen(3001,()=>console.log("server started"))