var express = require("express");
var router = express.Router();
const { User, Privilege } = require("../../models");
const bcrypt = require("bcryptjs");
const moment = require("moment");
router.post("/", async (req, res, next) => {
  const now = moment();
  await User.findOne({
    include: [
      {
        model: Privilege
      }
    ],
    where: {
      email: req.body.email,
      deletedAt: null
    }
  })
    .then(async item => {
      if (item) {
        await bcrypt
          .compare(req.body.password, item.password)
          .then(async value => {
            var token = bcrypt.hashSync(now.add(1, "days").toISOString(), 8);
            var tokenExpired = now.add(1, "days").toISOString();
            await User.update(
              {
                token,
                tokenExpired
              },
              {
                where: {
                  email: req.body.email
                }
              }
            )
              .then()
              .catch(error => {
                res.json({ error });
              });
            await User.findOne({
              attributes: { exclude: ["password"] },
              include: [
                {
                  model: Privilege
                }
              ],
              where: {
                email: req.body.email
              }
            }).then(item => {
              res.json({ item });
            });
          });
      } else {
        res.json({ status: "User not exist", code: 101 });
      }
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
