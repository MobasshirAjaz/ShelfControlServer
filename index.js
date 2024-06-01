const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

app.get("/", (req, res) => {
  res.send(`Hello world`);
});
app.listen(3000, () => {
  console.log(`Server running at port ${port}`);
});
