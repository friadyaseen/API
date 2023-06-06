const express = require('express')
const app = express()
const Qroute = require("./routes/Q.js")
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./database")

app.use('/Q', Qroute);

app.get("/", (req, res) => {
    res.send("Hello, World")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(` http://127.0.0.1:${port}`);
})