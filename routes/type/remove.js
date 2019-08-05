var express = require("express");
var router = express.Router();
const { Type } = require("../../models");
router.delete("/:userId", function(req, res, next) {
  Type.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.typeId
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
