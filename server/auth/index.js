const router = require("express").Router();
const {User, GameState} = require('../db/models');
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    let user;

    if (req.body.user.includes('@')) {
      user = await User.findOne({
        where: {
          email: req.body.user
        },
        include: GameState
      });
    }
    else {
      user = await User.findOne({
        where: {
          username: req.body.user
        },
        include: GameState
      })
    }

    if (!user) {
      res.status(404).send("User not found!");
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).json("Incorrect password!");
    } else {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const {username, email, password} = req.body;
    const user = await User.create({username, email, password});
    const gameState = await GameState.create({userId: user.id});

    req.login(user, err => {
      if (err) next(err);
      else res.json({user, gameState});
    });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

router.use("/google", require("./google"));
