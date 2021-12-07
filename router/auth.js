const router = require("express").Router();
const { auth } = require("../controllers");
const layoutName = (name) => (req, res, next) => {
  res.locals.layout = `layouts/${name}`;
  next();
};

router.use(layoutName(auth));
router.get("/login", auth.login);
router.post("/login", auth.api.login);

module.exports = router;
