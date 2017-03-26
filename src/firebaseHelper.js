import Firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBf_gVwct-fwCGMQAelFPeypdE0aYQt-Ws",
  authDomain: "firedb-e9c11.firebaseapp.com",
  databaseURL: "https://firedb-e9c11.firebaseio.com",
  storageBucket: "firedb-e9c11.appspot.com",
  messagingSenderId: "447002817746"
};

const firebaseApp = Firebase.initializeApp(config);

export function signInAnonymously() {
  firebaseApp.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/operation-not-allowed') {
      alert('You must enable Anonymous auth in the Firebase Console.');
    } else {
      console.error(error);
    }
  });
}

export function onAuthStateChanged(){
  firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('already sign in',user);
    }else{
      console.log('try signin...');
      signInAnonymously();
    }
  });
}
