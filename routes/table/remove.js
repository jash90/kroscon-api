var express = require("express");
var router = express.Router();
const { Table } = require("../../models");
router.delete("/:id", function(req, res, next) {
  Table.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.tableId
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
