// function readme() {
//     alert('Hi electron! Its us Ctrl Alt Elite.');
// }

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApws7c76Ndiicm-84XrAXNLP5qZlBTaFM",
    authDomain: "ctrl-alt-elite-e065c.firebaseapp.com",
    databaseURL: "https://ctrl-alt-elite-e065c.firebaseio.com",
    projectId: "ctrl-alt-elite-e065c",
    storageBucket: "ctrl-alt-elite-e065c.appspot.com",
    messagingSenderId: "29345198530",
    appId: "1:29345198530:web:3f278d56fd09788a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


