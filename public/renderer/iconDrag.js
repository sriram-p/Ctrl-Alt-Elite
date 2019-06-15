const icons={
    gmail: "../images/icons/Gmail_Icon.png",
    youtube: "../images/icons/youtube.png",
    slack: "../images/icons/slack.png",
};

const images={
    img1: document.getElementById('img1'),
    img2: document.getElementById('img2'),
    img3: document.getElementById('img3')
};
let imageStack=[];
 const onLoad = () => {
     imageStack=[images.img1,images.img2,images.img3];
 };

