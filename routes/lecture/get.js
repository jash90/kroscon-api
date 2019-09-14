var express = require("express");
var router = express.Router();
const { Lecture } = require("../../models");
router.get("/:id", function(req, res, next) {
  Lecture.findOne({
    where: {
      id: req.params.lectureId,
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
