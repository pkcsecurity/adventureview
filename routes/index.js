const express = require("express");
const router = express.Router();
const userModel = require("../user-model");
const gameUtils = require("../game-utils");
const game = require("../game");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "PKC Hiring" });
});

// Create new user and start game
router.get("/start", async function(req, res, next) {
  try {
    // Create new user
    const user = gameUtils.createUser();

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
        res.render("fail", { title: "Game over" });
        break;
      case "good":
        res.render("success", { title: "You win!", userId: user.id });
        break;
      default:
        const location = game[userModel.currentLocation(user)];
        res.render("game", { location, userId: user.id });
        break;
    }
  } catch (e) {
    next(e);
  }
});

// Do an action for a user then return the game view
router.post("/:id", async function(req, res, next) {
  try {
    // Format action
    let action = req.body.option.toLowerCase();
    action = action.replace(/\W/g, "");

    // Get user
    let user = await userModel.get(req.params.id);
    const location = game[userModel.currentLocation(user)];

    // To keep user input from accessing built in instance functions
    if (!location.actions.hasOwnProperty(action)) {
      throw new Error("Invalid user choice");
    }
    user = location.actions[action](user);
    await userModel.save(user);

    // Render game view
    res.redirect("/" + user.id);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
