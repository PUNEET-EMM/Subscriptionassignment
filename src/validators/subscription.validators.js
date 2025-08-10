const { z } = require("zod");

const GetStatusQuerySchema = z.object({
  userId: z.string().min(1, "Missing or invalid userId")
});

const UpdateSubscriptionBodySchema = z.object({
  userId: z.string().min(1, "userId is required"),
  newPlan: z.string().min(1, "newPlan is required"),
  effectiveDate: z.string().datetime({ message: "effectiveDate must be ISO datetime" })
});

module.exports = { GetStatusQuerySchema, UpdateSubscriptionBodySchema };
