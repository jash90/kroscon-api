var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
router.get("/:id", function(req, res, next) {
  User.findOne({
    include: [
      {
        model: Privilege
      },
    ],
    where: {
      id: req.params.id
    }
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
