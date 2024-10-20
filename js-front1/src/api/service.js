const TwitchAPI = {
  subscriptions: [
    { id: 1, name: "Ninja", category: "Gaming", followers: 18000000},
    { id: 2, name: "Pokimane", category: "Just Chatting", followers: 9000000},
    { id: 3, name: "Shroud", category: "FPS", followers: 10000000},
    { id: 4, name: "IRL_Explorer", category: "IRL", followers: 500000},
    { id: 5, name: "CookingMaster", category: "Food & Drink", followers: 2000000}
],
  all: function () {
    return this.subscriptions;
  },
  get: function (id) {
    const isSubscription = (s) => s.id === id;
    return this.subscriptions.find(isSubscription);
  },
  delete: function (id) {
    const isNotDelSubscription = (s) => s.id !== id;
    this.subscriptions = this.subscriptions.filter(isNotDelSubscription);
    return true;
  },
  add: function (subscription) {
    if (!subscription.id)
      subscription = {
        ...subscription,
        id: this.subscriptions.reduce((prev, current) => {
          return prev.id > current.id ? prev : current;
        }, 0).id + 1,
      };
    this.subscriptions = [...this.subscriptions, subscription];
    return subscription;
  },
  update: function (subscription) {
    const index = this.subscriptions.findIndex(s => s.id === subscription.id);
    if (index !== -1) {
      this.subscriptions[index] = subscription;
    }
    return subscription;
  },
};

export default TwitchAPI;