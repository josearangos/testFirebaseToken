var admin = require('firebase-admin');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var serviceAccount = require("./credential.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://yotearriendo-d532f.firebaseio.com"
  });

  var idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyMDUwYzMxN2ExMjJlZDhlMWZlODdkN2FhZTdlMzk3OTBmNmMwYjQifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veW90ZWFycmllbmRvLWQ1MzJmIiwibmFtZSI6Impvc2UgYWxiZXJ0byBhcmFuZ28gc2FuY2hleiIsInBpY3R1cmUiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLXBHRnJTMFoyMms0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUE0LzFVLXRaMndMb013L3Bob3RvLmpwZyIsImF1ZCI6InlvdGVhcnJpZW5kby1kNTMyZiIsImF1dGhfdGltZSI6MTUyNjYyNzYyNywidXNlcl9pZCI6IjRqVnZWaXJrVVBNbGxoRFk4SThWWlhHbDBWSTMiLCJzdWIiOiI0alZ2Vmlya1VQTWxsaERZOEk4VlpYR2wwVkkzIiwiaWF0IjoxNTI2NjI3NjI3LCJleHAiOjE1MjY2MzEyMjcsImVtYWlsIjoiam9zZWFsYmVydG9hcmFuZ29zQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA3MDEwMzE0OTA1OTI1NTMwNjYxIl0sImVtYWlsIjpbImpvc2VhbGJlcnRvYXJhbmdvc0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.czyX8fsY0PsE0oqCf4CS79mL0p47oMp1HCAz6fj5a5e3umnrNe9RBEpFosq89fDt-7Rzb06CvxEvelBgINoO3gKDAHQlmcfOX3FLbI7ZZVnrnT5F1UUR7FhWuOSub3kLjrQVseQkvQIRdzfQO4XUC_Bjs2sGEXkq2dHEMDf3e7j45PoTNc-0TADQ12YZCpH9HB_UQej9Ze52AruPb8hL3rLjIV9Wrr-WqAxjvR1whguZ7CuvVd10FJbf6p48H3zAtuc5DrhIqnfUSgWo1hFOt61D5R29474sZGDmi--lQ0efIG524vUWj38VWBrZQ2GpQfQAyQPuc42y5pBOsr08LA";

  admin.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    console.log("USUARIOO CONECTADO "+uid);
  }).catch(function(error) {
    console.log("Token no valido ");

    });
 


  app.listen(3019, () => {
      console.log('App listening on port 3000!');
  });

