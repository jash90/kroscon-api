var express = require("express");
var router = express.Router();
const { LoanGame } = require("../../models");
const authorization = require("../auth/authorizationAdmin");
router.get("/:id", [authorization], function(req, res, next) {
  LoanGame.findAndCountAll({
    include: [
      {
        model: BoardGame
      },
      {
        model: User
      }
    ],
    limit: 10,
    offset: req.params.id * 10,
    order: ["id"],
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});
router.get("/", [authorization], function(req, res, next) {
  LoanGame.findAndCountAll({
    include: [
      {
        model: BoardGame
      },
      {
        model: User
      }
    ],
    limit: 10,
    order: ["id"],
    where: {
      deletedAt: null
    }
  })
    .then(items => {
      res.json({ items });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
