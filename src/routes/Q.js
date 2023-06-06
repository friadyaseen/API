const { Router } = require('express')
const Q = require("../database/schemas/Qschema")
const router = Router();

router.post("/", async (req, res) => {
    const { question, choices } = req.body;
    const newQ = await Q.create({ question, choices });
    res.sendStatus(201);
})

router.delete("/:id", async (req, res) => {
    Q.deleteOne({ _id: { $eq: req.params.id } }).catch((err) => {
        console.log(err);
    })
    res.sendStatus(202);
})

router.post("/up/:id", async (req, res) => {
    let temp = req.body;
    Q.updateOne({ _id: req.params.id }, { question: temp.question }).catch((err) => { console.log(err) })
    for (let i = 0; i < temp.choices.length; i++) {
        Q.updateOne({ _id: req.params.id, "choices.id": i }, {
            $set: {
                "choices.$.choice": temp.choices[i].choice,
                "choices.$.correct": temp.choices[i].correct,
            }
        }).catch((err) => {console.log(err)})
    }

    res.sendStatus(200);
})

router.get("/", (req, res) => {
    res.send("Hello worlds");
})

module.exports = router;