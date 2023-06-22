const express = require('express')
const app = express()
const Croute = require("./routes/C.js")
const cors = require("cors")
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/C', Croute);

app.get("/yessss", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(` http://127.0.0.1:${port}`);
})