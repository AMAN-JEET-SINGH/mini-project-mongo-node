const express = require('express')
const app = express()
const path=require('path')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
const userModel=require("./models/user.js")

app.get('/', function (req, res) {
  res.render('index')
})
app.get('/delete/:id', async function (req, res) {
  let user= await userModel.findOneAndDelete({_id:req.params.id})
  res.redirect('/read')
  
})
app.get('/read', async function (req, res) {
  let alluser= await userModel.find()
  res.render('read',{users:alluser})
})
// app.get('/create', async (req,res)=>{
//     let createduser= await userModel.create({
//       name:"kabir",
//       url:"kabir.com",
//       about:"kabira"
//     })
//     res.send(createduser)
// })
app.post('/submit', async function (req, res) {
  let{name,pictureUrl,about}=req.body
  let createduser=await userModel.create({
    pictureUrl,name,about

  })
  
  res.redirect("/read")
  
})

app.listen(8080)