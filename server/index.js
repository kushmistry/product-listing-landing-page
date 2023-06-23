const express = require("express");
const cors = require("cors");

const { PORT } = require("./constants.js");
const router = require("./route/route.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
