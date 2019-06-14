onload = () => {
    console.log('this is the web view');
    const webview = document.querySelector('webview')
    const indicator = document.querySelector('.indicator')

    const loadstart = () => {
      indicator.innerText = 'loading...'
    }

    const loadstop = () => {
      indicator.innerText = ''
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
}

var iconArray = ['../images/gmail.png', '../images/slack.png', '../images/docs.png'];
var iconUrl = ['https://mail.google.com/', 'https://slack.com', 'https://docs.google.com/']

var iconData = [];
function displayIcons() {
    
    for(i= 0; i< iconArray.length; i++) {
        var obj = {};
            obj["name"] = iconArray[i];
            obj["url"] = iconUrl[i];
            iconData.push(obj);
            console.log('this is the obj', iconData);
    }
    

    var tempStr = '';
    iconData.forEach((icon, index) => {
        var str = '';
        console.log('this is the icon name', icon.name, ' and url is', icon.url);
        str = `
        <div class="row icon-padding">
            <div class="col-lg-12">
                <a><img id=icon"`+ index +` onclick="displayWebPage(this.id,'`+ icon.url +`')" src="`+ icon.name +`" width="40px" height="40px" alt="SLACK"></a>
            </div>
        </div>
        `
        tempStr = tempStr.concat(str);
    });
    document.getElementById('icons-display').innerHTML = tempStr;
}

function displayWebPage(id, url) {
    console.log('incoming');
    document.getElementById('main-web-view').src = url;
}