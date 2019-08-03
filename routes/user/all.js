var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
router.get("/", function(req, res, next) {
  User.findAll({
    include: [
      {
        model: Privilege
      },
    ]
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      console.log(error);
      res.json({ error });
    });
});
module.exports = router;
