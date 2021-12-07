const router = require("express").Router();
const { dashboard } = require("../controllers");
const layoutName = (name) => (req, res, next) => {
  res.locals.layout = `layouts/${name}`;
  next();
};

// const authenticate = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/auth/login");
// };

// router.use(authenticate);
router.use(layoutName("dashboard"));
router.get("/", dashboard.home);
router.get("/post", dashboard.post.index);

module.exports = router;
