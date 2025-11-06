const express = require("express");
const app = express();
const router = require("./routes/auth.route.js");

app.use("/api/auth",router)

app.get("/",(req,res) => {
    res.status(200).send('welcome to amirs world');
})

const PORT = 5000

app.listen(PORT,() => {
    console.log(`server is running at port ${PORT}`);
});

