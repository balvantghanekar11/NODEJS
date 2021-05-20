const path = require("path");

// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname, "views", "404.html");
});

app.listen(3000, (req, res) => {
  console.log("SERVER Started @3000");
});
