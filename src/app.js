const express = require("express");
const subscriptionRoutes = require("./routes/subscription.routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/api", subscriptionRoutes);

app.use(errorHandler);

module.exports = app;
