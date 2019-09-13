var express = require("express");
var router = express.Router();
const { User } = require("../../models");
router.get("/", async (req, res, next) => {
  await User.update(
    {
      token: null,
      tokenExpired: null
    },
    {
      where: {
        token: req.headers.authorization,
        deletedAt: null
      }
    }
  )
    .then(item => {
      res.json(item);
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
