var express = require("express");
var router = express.Router();
const { Lecture } = require("../../models");
router.delete("/:id", function(req, res, next) {
  Lecture.update(
    {
      deletedAt: new Date()
    },
    {
      where: {
        id: req.params.lectureId
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
