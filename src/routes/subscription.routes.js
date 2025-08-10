const express = require("express");
const router = express.Router();

const { getStatus, postUpdate } = require("../controllers/subscription.controller");
const { validateQuery, validateBody } = require("../middlewares/validate");
const { asyncHandler } = require("../middlewares/asyncHandler");
const { GetStatusQuerySchema, UpdateSubscriptionBodySchema } = require("../validators/subscription.validators");

router.get("/subscription-status",
  validateQuery(GetStatusQuerySchema),
  asyncHandler(getStatus)
);

router.post("/update-subscription",
  validateBody(UpdateSubscriptionBodySchema),
  asyncHandler(postUpdate)
);

module.exports = router;
