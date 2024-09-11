require("dotenv").config(0);
const { PORT } = process.env || 4000;
const express = require("express");
const app = express();
const routes = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
