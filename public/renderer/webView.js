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
    const webview2 = document.getElementById('split-web-view2');
    webview2.src="../html/dropApp.html"
};
let currIndex=0;
const iconObj=[
    {
        name:'../images/gmail.png',
        url:'https://mail.google.com/',
    },
    {
        name:'../images/slack.png',
        url:'https://slack.com',
    },
    {
        name:'../images/docs.png',
        url:'https://docs.google.com/',
    },
    {
        name:'../images/github.png',
        url:"https://www.github.com",
    },
];
const iconArray = ['../images/gmail.png', '../images/slack.png', '../images/docs.png','../images/github.png'];
const iconUrl = ['https://mail.google.com/', 'https://slack.com', 'https://docs.google.com/',"https://www.github.com"];

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
        <div class="row icon-padding bg-light"  style="height: 25%;box-shadow: #222222;">
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
    document.getElementById('main-web-view').src = iconData[index].url;
    document.getElementById('split-web-view1').src=iconData[index].url;
}
function dragStart(ev) {
    currIndex=ev.target.parentNode.id;
    ev.dataTransfer.effectAllowed='copy';
    ev.dataTransfer.setData("id", ev.target.getAttribute('id')+"|"+ev.target.parentNode.id);
    ev.dataTransfer.setDragImage(ev.target,10,10);
    return true;
}
function dragEnter(ev) {
    let targetData=[ev.target.getAttribute('id'),ev.target.parentNode.id];
    let dropData = ev.dataTransfer.getData("id");
    let dropItems = dropData.split("|");
    console.log("Chal gailo",iconObj[currIndex].url);
    const webview2 = document.getElementById('split-web-view2');
    webview2.src=iconObj[currIndex].url;
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
function changeViews() {
    if(document.getElementById('web-view').classList.contains('hide')) {
        document.getElementById('web-view').classList.remove('hide');
        document.getElementById('split-web-view').classList.add('hide');
    } else {
        document.getElementById('web-view').classList.add('hide');
        document.getElementById('split-web-view').classList.remove('hide');
    }
}

