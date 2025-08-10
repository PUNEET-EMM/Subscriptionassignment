const { subscriptions } = require("../store/subscriptions.store");

function getSubscriptionByUserId(userId) {
  return subscriptions.get(userId) || null;
}

/** Upsert + update plan/effectiveDate per spec */
function updateSubscription({ userId, newPlan, effectiveDate }) {
  const existing = subscriptions.get(userId) || {
    userId,
    plan: "free",
    status: "active",
  };

  const updated = {
    ...existing,
    plan: newPlan,
    status: "active",
    effectiveDate
  };

  subscriptions.set(userId, updated);
  return updated;
}

module.exports = { getSubscriptionByUserId, updateSubscription };
