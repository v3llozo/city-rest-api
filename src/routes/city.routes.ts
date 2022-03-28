import * as express from "express";
let router = express.Router();

router.get("/city", (req, res) => {
  res.send("city");
});

export { router };
