const firebaseConfig = {
  apiKey: "AIzaSyBnXXnl4RcelG_XrcGwrz10tSFboO0o6B4",
  authDomain: "hesapkitap-a7f30.firebaseapp.com",
  projectId: "hesapkitap-a7f30",
  messagingSenderId: "383019263459",
  appId: "1:383019263459:web:f70412f93a4c3ca9106cd6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.getToken({
  vapidKey: "BL_p_WIjARZO7oGKcixlIbmMePZOBKt3_kK5qlVsRLylOQ8HhUPQKJoVpr7pNOcMvHLrW2EVd2U7bEdzFKKoWHw"
}).then((token) => {
  if (token) {
    localStorage.setItem("push_token", token);
    fetch("https://hesapkitap-push-server.onrender.com/register-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token })
    });
  }
});