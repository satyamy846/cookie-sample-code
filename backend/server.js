const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')


app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());

app.post("/logout", (req, res) => {
    const cookieValue = req.cookies['table'];
    console.log(cookieValue)
    console.log(req.cookies)
    res.json({
        cookie: cookieValue,
        message:"succcess"
    })
  });
  
  app.post("/login", (req, res) => {
    const data = req.body.data;
    console.log(data)
    const key = "12345678";
    res.cookie('table', key, { httpOnly: false, maxAge: 60 * 60, sameSite: 'None' });
    res.send("success");
  });
  

app.listen(4000, ()=>{
    console.log("Server started")
})