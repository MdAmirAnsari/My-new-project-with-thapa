const expres = require("express");
const app = expres();

app.get("/",(req,res) => {
    res.status(200).send('welcome to amirs world');
})

const PORT = 5000

app.listen(PORT,() => {
    console.log(`server is running at port ${PORT}`);
});