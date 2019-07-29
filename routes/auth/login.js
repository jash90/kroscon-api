var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const moment = require("moment");
router.post("/", async (req, res, next) => {
  const now = moment();
  await User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(async item => {
      await bcrypt
        .compare(req.body.password, item.password)
        .then(async value => {
          if (
            item.token &&
            item.tokenExpired &&
            moment(item.tokenExpired).diff(now, "hours", true) > 12
          ) {
            delete item.dataValues.password;
            await res.json({ item });
          } else {
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
                attributes: { exclude: ['password'] },
              where: {
                email: req.body.email
              }
            }).then(item => {
              res.json({item});
            });
          }
        });
    })
    .catch(error => {
      res.json({ error });
    });
});

module.exports = router;
