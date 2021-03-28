const express = require("express");
const app = express();
const path = require("path");
const connect = require("./src/db/conn");
const bodyparser = require("body-parser");
connect();
const Schema = require("./src/schema/userSchema");
// const static_path = path.join(__dirname, "./public/css");
const template_path = path.join(__dirname, "./views");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.static(static_path)); //static files hosting

app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/form", (req, res) => {
  res.render("form.hbs");
});

app.post("/form", async (req, res) => {
    console.log(req.body.email)
  try {
    const user = new Schema({
      Name: req.body.name,
      Email: req.body.email,
      Scale: req.body.scale,
      Where: req.body.where,
      What_time: req.body.time,
      Emotion: req.body.emotion,
      Comment: req.body.comment,
    });
    const result = await user.save();

    console.log("result", result);
    res.status(200).json({
      message: "form submitted succesfully",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3000, () => console.log("Server Running at 3000"));
