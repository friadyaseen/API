const { Router } = require('express');
const router = Router();
const Data = require('../data/index.js');
const path = "./src/data/data.json";

router.get("/", (req, res) => {
    let data = Data.Read(path);
    res.send(data.chat);
})

router.post("/send", (req, res) => {
    let Mes = req.body;
    let data = Data.Read(path);
    data.chat[Mes.chat_id].Mes.push(Mes.M)
    Data.Write(path, data);
    res.sendStatus(201);
})

module.exports = router;