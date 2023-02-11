const express = require("express");
const dotenv = require("dotenv");
const notes = require("./routes/notes");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/notes", notes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
