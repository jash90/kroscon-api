var express = require("express");
var router = express.Router();
const { Mechanic } = require("../../models");
router.delete("/:id", function(req, res, next) {
  Mechanic.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.mechanicId
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
