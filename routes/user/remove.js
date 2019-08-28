var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const authorization = require("../auth/authorizationAdmin");
router.delete("/:id", [authorization], function(req, res, next) {
  User.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.userId
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
