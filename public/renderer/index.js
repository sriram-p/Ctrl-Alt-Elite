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
