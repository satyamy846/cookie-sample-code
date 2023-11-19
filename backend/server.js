const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')


app.use(cookieParser());
app.use(cors({
    origin:"*"
}))

app.use(express.json());

app.post("/logout",(req, res)=>{
    res.clearCookie('table')
    res.send('cleared')
})
app.post("/login", (req, res)=>{

    const key = "12345678";
    res.setHeader('Set-Cookie', `table: ${key}`, { httpOnly: false, path:'/', });
    res.cookie('table', key, {httpOnly:false, maxAge: 60 * 60, sameSite: 'None', secure:true })
    res.send("success");
})


app.listen(400, ()=>{
    console.log("Server started")
})