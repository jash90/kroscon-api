var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const autorization = require("./authorizationAdmin");
router.post("/", [autorization], function(req, res, next) {
  User.update(
    {
      privilegeId: req.body.privilegeId
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
