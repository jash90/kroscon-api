var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const authorization = require("../auth/authorizationUser");
router.post("/", [authorization], function(req, res, next) {
  User.update(
    {
      password: req.body.password
    },
    {
      where: {
        id: req.body.userId,
        deletedAt: null
      }
    }
  )
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
