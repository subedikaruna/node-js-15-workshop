// const app = require('express')()
require('dotenv').config()
const express = require('express')
const { blogs } = require('./model/index')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.set('view engine','ejs')
require("./model/index")

app.get("/create", (req, res) => {
  res.render("create.ejs"); //use last argument
});
app.post("/create", async(req, res) => {
const{title,subtitle,description}=req.body
await blogs.create({
  title:title,//if key and value same then we can write any one
  subtitle:subtitle,
  description:description
  // title,
  // subtitle,
  // description
})
res.send("Blog added successfully")
// const title=req.body.title
// const subtitle=req.body.subtitle
// const description=req.body.description



//use last argument
});
//   const data = {
//     name: "karuna",
//     age: 25,
//     address: "kathmandu",
//   };
//   const nepal = {
//     continent : 'asia', 
// }
//   res.render("home.ejs", {
//     haha: data,
//   });
// });
// app.get("/about", (req, res) => {
//   res.render("test/about"); //use last argument
// });
// app.get('/about',(hehe,haha)=>{
//     haha.send("This is about page")//use last argument
// })
app.use(express.static("public/css/"));
app.listen(3001, () => {
  //call back function as last argument is passed as function
  console.log("project suru vayo hai tw nodejs ko");
});
