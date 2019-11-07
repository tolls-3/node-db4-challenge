const express = require("express");
const recipes = require("./recipesDb");
const router = express.Router();

router.get("/", (req, res) => {
  recipes
    .getRecipes()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Internal Server Error: " + err.message });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  recipes
    .getShoppingList(req.params.id)
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Internal Server Error: " + err.message });
    });
});

router.get("/:id/instructions", (req, res) => {
  recipes
    .getInstructions(req.params.id)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Internal Server Error: " + err.message });
    });
});

module.exports = router;
