const webpush = require("web-push");

const vapidKeys = {
  publicKey:
    "BEPAR3rAj7vjmz_PpGf1q7OvSt2iIFKE74_UN8z3UQ4foMZKTO-iIWEOiJuX2sAvUTwuxa2zOKnYDb-CZ7CXQOc",
  privateKey: "S56ctZJDhg8h8Zm0cslaQynbY64Xuk6SqTMJxwZ4mNw",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eENhOFVGvrY:APA91bGtJdmX7g5rMPPdJ4DUv7kHC5M2O2zkCex3C-jcfz5EBFFy6wATOralcmkDBrX0dwVa3DOJgCg6dszPzPizHJKQeqN1F9Wvj7oV8FXFMoaMyWzep3LwUf0Nl57K9EZqXuihiqNy",
  expirationTime: null,
  keys: {
    p256dh:
      "BDhpwaeWbm6NX6F_J5_bRfB-rOOV5La_zaOyoeQ03IECkcOswXNpLiUjPqrXOpsmDTazEmHGkf7d4-rSSj_zYDc",
    auth: "9BnXF8vJ2NpXiEoojUOcGw",
  },
};

const notificationPayload = {
  notification: {
    title: "A new notificationt title 1223452342",
    body: "Body of the notificatio goes here...",
    icon: "assets/apple-icon.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: 15154545455,
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Go the site",
      },
    ],
  },
};

webpush
  .sendNotification(subscription, JSON.stringify(notificationPayload))
  .then(() => {});
