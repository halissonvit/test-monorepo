const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();
const server = require("http").Server(app);

app.use(cors());
app.use("/health", (req, res) => {
  res.status(200).json({
    appName: "API",
    version: process.env.npm_package_version,
    status: "OK",
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(`
    \n\n
    ------------------------------------------------
    ------------------------------------------------

    API: 

    STATUS: Error
    LOG: ${error}
    ------------------------------------------------
    ------------------------------------------------
    `);
  } else {
    console.log(`
    \n\n
    ------------------------------------------------
    ------------------------------------------------

    API: 

    NAME: Express API
    PORT: ${PORT}
    STATUS: OK
    ------------------------------------------------
    ------------------------------------------------
    `);
  }
});
