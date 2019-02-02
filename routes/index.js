const express = require("express");
const router = express.Router();
const userModel = require("../user-model");
const uuid = require("uuid/v4");
const startLocation = "corporatePeon";
const game = require("../game");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "PKC Hiring" });
});

// Create new user and start game
router.get("/start", async function(req, res, next) {
  try {
    // Create new user
    const id = uuid();
    const user = {
      id,
      location: startLocation,
      state: {}
    };
    // Save new user to DB
    await userModel.save(user);

    // Render game view
    res.redirect("/" + user.id);
  } catch (e) {
    next(e);
  }
});

// Get the game view with user's current location
router.get("/:id", async function(req, res, next) {
  try {
    // Get user
    const user = await userModel.get(req.params.id);
    switch (user.state.ending) {
      case "bad":
        res.render("fail");
      case "good":
        res.render("success");
      default:
        res.render("game", { location: game[user.location], userId: user.id });
    }
  } catch (e) {
    next(e);
  }
});

// Do an action for a user then return the game view
router.post("/:id", async function(req, res, next) {
  try {
    console.log(req.body);
    // Format action
    let action = req.body.action.toLowerCase();
    action = action.replace(/\W/g, "");

    // Get user
    let user = await userModel.get(req.params.id);
    user = game[user.location].actions[action](user);
    await userModel.save(user);

    // Render game view
    res.redirect("/" + user.id);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
