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
};

const iconArray = ['../images/gmail.png', '../images/slack.png', '../images/docs.png'];
const iconUrl = ['https://mail.google.com/', 'https://slack.com', 'https://docs.google.com/'];

let iter=0;
let iconData = [];
function displayIcons() {
    if(iter===0){
        for(let i= 0; i< iconArray.length; i++) {
            let obj = {};
            obj["name"] = iconArray[i];
            obj["url"] = iconUrl[i];
            iconData.push(obj);
            console.log('this is the obj', iconData);
        }
    }

    var tempStr = '';
    iconData.forEach((icon, index) => {
        var str = '';
        console.log('this is the icon name', icon.name, ' and url is', icon.url,index);
        str = `
        <div class="row icon-padding">
            <div class="col-lg-12">
                <a id=`+index+`>
                    <img id=icon"`+ index +` 
                    onclick="displayWebPage('`+ index +`')" 
                    src="`+ icon.name +`" width="40px" height="40px" alt="SLACK"
                    draggable="true"
                    ondragstart="return dragStart(event)"
                    ondragenter="return dragEnter(event)"
                    ondrop="return dragDrop(event)" 
                    ondragover="return dragOver(event)"
                    >
                </a>
            </div>
        </div>
        `;
        tempStr = tempStr.concat(str);
    });
    document.getElementById('icons-display').innerHTML = tempStr;
}

function displayWebPage(index) {
    console.log('incoming',iconData);
    document.getElementById('main-web-view').src = iconData[index].url;
}
function dragStart(ev) {
    ev.dataTransfer.effectAllowed='copy';
    ev.dataTransfer.setData("id", ev.target.getAttribute('id')+"|"+ev.target.parentNode.id);
    ev.dataTransfer.setDragImage(ev.target,10,10);
    console.log("abcd",ev.target.parentNode.id,"*******");
    return true;
}
function dragEnter(ev) {
    ev.preventDefault();
    return true;
}
function dragOver(ev) {
    ev.preventDefault();
}
function dragDrop(ev) {
    let targetData=[ev.target.getAttribute('id'),ev.target.parentNode.id];
    let dropData = ev.dataTransfer.getData("id");
    let dropItems = dropData.split("|");
    // prevElem.getElementsByTagName("a")[0].getAttribute('id') = ev.target.getAttribute('id');
    const currIndex=targetData[1];
    const prevIndex=dropItems[1];
    const temp=iconData[currIndex];
    iconData[currIndex]=iconData[prevIndex];
    iconData[prevIndex]=temp;
    iter+=1;
    displayIcons();

    ev.preventDefault();
    return false;
}
