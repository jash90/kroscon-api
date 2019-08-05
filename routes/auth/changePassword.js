var express = require("express");
var router = express.Router();
const { User } = require("../../models");
router.post("/", function (req, res, next) {
    User.update(
        {
            password: req.body.password
        },
        { where: { id: req.body.userId } }
    )
        .then(item => {
            res.json({ item });
        })
        .catch(error => {
            res.json({ error });
        });
});

module.exports = router;
