const { Router } = require('express');
const router = Router();
const Data = require('../data/index.js');
const path = "./src/data/data.json";

router.get("/", (req, res) => {
    let data = Data.Read(path);
    data.chat.M[0].m += 109746
    data = Data.WriteR(path, data)
    res.send(data.chat.M[0]);
})

module.exports = router;