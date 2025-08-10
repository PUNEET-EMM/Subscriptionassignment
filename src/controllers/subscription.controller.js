const { getSubscriptionByUserId, updateSubscription } = require("../services/subscription.service");

async function getStatus(req, res) {
  const { userId } = req.query;

  const sub = getSubscriptionByUserId(userId);
  if (!sub) {
    return res.status(404).json({ success: false, error: "Subscription not found" });
  }

  return res.status(200).json({
    success: true,
    subscription: {
      userId: sub.userId,
      plan: sub.plan,
      status: sub.status,
      expiresAt: sub.expiresAt
    }
  });
}

async function postUpdate(req, res) {
  const { userId, newPlan, effectiveDate } = req.body;
  const updated = updateSubscription({ userId, newPlan, effectiveDate });

  
  return res.status(200).json({
    success: true,
    subscription: {
      userId: updated.userId,
      plan: updated.plan,
      status: updated.status,
      effectiveDate: updated.effectiveDate
    }
  });
}

module.exports = { getStatus, postUpdate };
