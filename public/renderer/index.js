function readme() {
    const webview = document.getElementById('foo');
    const indicator = document.querySelector('.indicator');

    const loadstart = () => {
        indicator.innerText = 'loading...'
    };

    const loadstop = () => {
        indicator.innerText = ''
    };

    webview.addEventListener('did-start-loading', loadstart);
    webview.addEventListener('did-stop-loading', loadstop);
}
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


