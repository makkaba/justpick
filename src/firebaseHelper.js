import Firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBf_gVwct-fwCGMQAelFPeypdE0aYQt-Ws",
  authDomain: "firedb-e9c11.firebaseapp.com",
  databaseURL: "https://firedb-e9c11.firebaseio.com",
  storageBucket: "firedb-e9c11.appspot.com",
  messagingSenderId: "447002817746"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
const ref = db.ref('todos');

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

//firebase로부터 데이터 변경이 오면 
//state를 변경시켜서 view가 다시 랜더링되도록 해야 한다  

export function updateTodoList(onChangeList){
  ref.once("value").then(function (snapshot){
    var value = snapshot.val();
    //변경
    //console.log(value);
    
    //onChangeList(real);
  });
}

export function getTodoList(){
  ref.once("value").then(function (snapshot){
    var value = snapshot.val();
    console.log(value);
    var real = value.map((v)=> { return v});
    //keys 를 받아와서 
    //map .title
    // console.log(real);
  });
}

export function addTodo(todo){
  ref.push(todo);
}