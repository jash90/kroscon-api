var express = require("express");
var router = express.Router();
const { Table } = require("../../models");
router.post("/", function(req, res, next) {
  Table.update(
    {
      name: req.body.name
    },
    {
      where: {
        id: req.body.tableId
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
