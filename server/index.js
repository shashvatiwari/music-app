require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const songRoutes = require("./routes/songRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/songs", songRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
