var express = require("express");
var router = express.Router();
const { User } = require("../../models");
const authorization = function(req, res, next) {
  const error = { status: "Not Autorization", code: 401 };
  if (!req.headers.authorization) {
    res.json({ error });
    return;
  }
  User.findOne({
    where: { token: req.headers.authorization }
  })
    .then(item => {
      if (item.privilegeId > 1) {
        next();
      } else {
        res.json({ error });
        return;
      }
    })
    .catch(error => {
      res.json({ error });
      return;
    });
};

module.exports = authorization;
