var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const authorization = require("../auth/authorizationUser");
router.post("/", function(req, res, next) {
  const password = bcrypt.hashSync(req.body.password, 8);
  User.update(
    {
      password: password
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
