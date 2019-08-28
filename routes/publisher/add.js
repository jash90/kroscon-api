var express = require("express");
var router = express.Router();
const { Publisher } = require("../../models");
const authorization = require("../auth/authorizationMod");
router.post("/", [authorization], function(req, res, next) {
  Publisher.create({
    name: req.body.name
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
