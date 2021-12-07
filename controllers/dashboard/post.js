const moment = require("moment");
const posts = [
  {
    id: 1,
    title: "lorem ipsum",
    body: "dolor sit amet",
    createdAt: Date(),
  },
  {
    id: 2,
    title: "lorem ipsum",
    body: "dolor sit amet",
    createdAt: Date(),
  },
];

module.exports = {
  index: (req, res) => {
    const locals = {
      data: {
        post: posts.map((i) => {
          i.fromNow = moment(i.createdAt).fromNow();
          return i;
        }),
      },
      contentName: "Post",
    };
    res.render("pages/dashboard/post", locals);
  },
};
