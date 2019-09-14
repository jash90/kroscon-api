var express = require("express");
var router = express.Router();
const { Table } = require("../../models");
router.get("/:id", function(req, res, next) {
  Table.findOne({
    where: {
      id: req.params.tableId,
      deletedAt: null
    }
  })
    .then(item => {
      res.json({ item });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
