var express = require("express");
var router = express.Router();
const { User } = require("../../models");
router.post("/", function (req, res, next) {
    User.update(
        {
            privilegeId: req.body.privilegeId
        },
        { where: { id: req.body.id } }
    )
        .then(item => {
            res.json({ item });
        })
        .catch(error => {
            res.json({ error });
        });
});

module.exports = router;
