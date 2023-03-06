var express = require("express");
var router = express.Router();

const db = require("../model/helper.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.get("/", function (req, res, next) {
  db("SELECT * FROM human_images")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/:id", function (req, res) {
  db(`SELECT * FROM human_images WHERE id = ${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
