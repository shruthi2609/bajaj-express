const app=require("express")()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
/*const SampleRoutes=require("./routes/sample")
app.use("/",SampleRoutes)*/
const signup=require("./routes/createUser")
const findAll=require("./routes/findUser")
const update=require("./routes/updateUser")
const deleteUser=require("./routes/deleteUser")
const signin=require("./routes/signinUser")
app.use("/",signup)
app.use("/",findAll)
app.use("/",update)
app.use("/",deleteUser)
app.use("/",signin)
app.listen(3001,()=>console.log("server started"))