var express = require("express");
var router = express.Router();
const { Publisher } = require("../../models");
router.delete("/:id", function(req, res, next) {
  Publisher.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.publisherId
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
